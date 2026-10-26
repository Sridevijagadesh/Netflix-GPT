export const CheckValidation = (email, password, username) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/.test(username);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!emailRegex) {
    return "Invalid email format";
  }
  if (!passwordRegex) {
    return "Password must be at least 8 characters long and contain at least one letter and one number";
  }
  if (!usernameRegex) {
    return "Username must be 3-16 characters long and can only contain letters, numbers, and underscores";
  }
  return null;
};
