hasSpecialCharacter(string) {
  const regex = /^[a-zA-Z0-9]*$/; // Regex pattern to allow only alphanumeric characters
  return !regex.test(string);
},