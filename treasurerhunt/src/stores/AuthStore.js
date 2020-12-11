import instance from "./instance";
import { makeAutoObservable } from "mobx";
import isEmpty from "../helper/isEmpty";
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = {};
  error = null;

  get userExists() {
    console.log("User exisdtance", !isEmpty(this.user));
    return !isEmpty(this.user);
  }

  signIn = async (userCredentials) => {
    try {
      console.log("Userr credientials:", userCredentials);
      this.user = await instance.post("/auth/signin", userCredentials);
      this.user = this.user.data;
      this.error = null;
      console.log("Use has been recieved:", this.user);
    } catch (error) {
      this.error = error.message;
      console.log("💣 USER COULDN'T SIGN IN", error);
    }
  };
  signUp = async (user) => {
    try {
      await instance.post("/auth/signup", user);
      this.error = null;
    } catch (error) {
      console.log("💣 USER COULDN'T SIGN UP", error);
      this.error = error.message;
    }
  };
  signOut = async () => {
    try {
      await instance.put("/auth/signout", this.user);
      this.user = {};
      this.error = null;
    } catch (error) {
      console.log("💣 USER COULDN'T SIGN UP", error);
      this.error = error.message;
    }
  };
}

const authStore = new AuthStore();
export default authStore;
