import { homelisteners } from "../pages/Home";

export const Logout = () => {
    localStorage.removeItem("gameHubUser")
    homelisteners();
};

export const Login = () => {
  if(inputLogin.value.length > 0) {
    localStorage.setItem("gameHubUser", `${inputLogin.value}`)
  }
  homelisteners();
};


export const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}