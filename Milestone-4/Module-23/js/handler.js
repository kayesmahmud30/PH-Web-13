document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log('btn clicked');
    const pageTitleElement = document.getElementById("page-title");
    console.log(pageTitleElement);
    pageTitleElement.innerText = "Updated page title text.";
  });

//-----------------------------------------------------------
document.getElementById("btn-login").addEventListener("click", function () {
  const userInfoEl = document.getElementById("user-info");
  userInfoEl.innerText = "User Logged-In successfully";
});

//------------------------------------------------------------
// 1. Set event listener.....
document.getElementById("btn-update").addEventListener("click", function () {
  //   console.log("Update button clicked");
  // 2.get the text from the input field....
  const nameInput = document.getElementById("input-name");
  //   console.log(nameInput);
  const name = nameInput.value;
  //   console.log(name);

  // 3. Set the name....
  const namep = document.getElementById("name");
  namep.innerText = name;
});
