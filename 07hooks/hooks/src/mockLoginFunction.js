

const login = ({ email, password }) => {
  console.log("login got - email: " + email + "  password: " + password)

  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve("authtoken-0987654321");
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, delay);
  });

};

export default login;

