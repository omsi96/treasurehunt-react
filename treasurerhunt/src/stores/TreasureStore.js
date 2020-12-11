import instance from "./instance";
import { makeAutoObservable } from "mobx";

class TreasureStore {
  constructor() {
    makeAutoObservable(this);
  }
  things = [];
  treasures = [];

  createThing = async (thing) => {
    try {
      await instance.post("things/create", thing);
      return true;
    } catch (error) {
      console.log("💣 USER COULDN'T CREATE THING", error);
      return false;
    }
  };
  fetchThings = async () => {
    try {
      const things = await instance.post("things");
      this.things = things;
      return true;
    } catch (error) {
      console.log("💣 USER COULDN'T SIGN UP", error);
      return false;
    }
  };
  createTreasure = async (treasure) => {
    try {
      await instance.post("treasures/create", treasure);
      return true;
    } catch (error) {
      console.log("💣 USER COULDN'T CREATE Treasure", error);
      return false;
    }
  };
  fetchTreasures = async () => {
    try {
      const treasures = await instance.post("/treasures");
      this.treasures = treasures;
      return true;
    } catch (error) {
      console.log("💣 USER COULDN'T GET TREASURE", error);
      return false;
    }
  };
}

const treasureStore = new TreasureStore();
treasureStore.fetchThings();
export default treasureStore;
