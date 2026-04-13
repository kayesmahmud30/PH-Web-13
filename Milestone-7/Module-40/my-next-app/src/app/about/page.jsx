import Image from "next/image";
import flowers from "../../assets/images/flowers.jpg";

const AboutPage = () => {
  return (
    <div>
      <h2>This is About Page</h2>

      <Image
        src="https://images.unsplash.com/photo-1477506410535-f12fe9af97cc?"
        width="500"
        height="300"
        alt="Egg Image"
      ></Image>

      <Image
        src="/natural.jpg"
        width="500"
        height="300"
        alt="Natural Image"
      ></Image>

      <Image src={flowers} width="500" height="300" alt="Flower Image"></Image>
    </div>
  );
};

export default AboutPage;
