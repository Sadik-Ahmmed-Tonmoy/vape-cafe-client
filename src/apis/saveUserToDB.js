import axios from "axios";

const saveUserToDB = (user) => {
 const currentUser = {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
    role: "customer",
  };
  axios
    .post("https://vape-cafe-server.vercel.app/users", currentUser)
    .then((res) => console.log(res));
};

export default saveUserToDB;
