export const formValidate = (email, password, fullName = undefined) => {
  if (fullName !== undefined) {
    const isValidName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(fullName);
  
    if (!isValidName) return "Full Name is Invalid";
  }
  const isValidEmail =
    /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/.test(
      email
    );
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isValidEmail) return "Email is Invalid";
  if (!isValidPassword) return "Password is incorrect!";

  return null;
};
