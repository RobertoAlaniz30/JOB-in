import { reactive } from "vue";
import Job from "../types/Job";

interface IStore {
  postulations: Array<Job>;
}

const Store = reactive<IStore>({
  postulations: [],
});

const setPostulations = (postulation: Job): void => {
  Store.postulations = [...Store.postulations, postulation];
};

export { setPostulations };
export default Store;
