"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const NewUserPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProduct = Object.fromEntries(formData.entries());
    // console.log(newProduct);

    const req = await fetch("http://localhost:8008/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newProduct),
    });

    const res = await req.json();

    if (res.success) {
      alert("Product created successfully");
      redirect("/products");
    }
  };

  return (
    <div>
      <h2>Create a new user</h2>
      <Form className="w-full max-w-96" onSubmit={onSubmit}>
        <Fieldset>
          <Fieldset.Legend>Profile Settings</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Product Name</Label>
              <Input placeholder="Product 1" />
              <FieldError />
            </TextField>
            <TextField isRequired name="price" type="number">
              <Label>Products price</Label>
              <Input placeholder="200 (in USD $)" />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Add Product
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default NewUserPage;
