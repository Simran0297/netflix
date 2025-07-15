export const formValidate = (email, password, name) => {
  const isValidName = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(name);
  const isValidEmail =
    /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/.test(
      email
    );
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isValidName) return "Invalid Name";
  if (!isValidEmail) return "Email is Invalid";
  if (!isValidPassword) return "Password is incorrect!";

  return null;
};
