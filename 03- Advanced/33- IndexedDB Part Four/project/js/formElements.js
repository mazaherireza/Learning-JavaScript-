const $ = document;

const form = $.querySelector("form");

// Retrieve form values.
const username = $.querySelector("#username");
const password = $.querySelector("#password");
const email = $.querySelector("#email");

const resetFields = () => {
    username.value = "";
    password.value = "";
    email.value = "";
  };

export { form, username, password, email, resetFields}