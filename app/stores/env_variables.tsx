import { create } from "zustand";

const useEnvStore = create((set) => ({
  basePath: "",
  clientUrl:"",
  setBasePath: (newValue) =>set({basePath: newValue}),
  setClientUrl: (newValue) =>set({clientUrl: newValue}),

}));

export default useEnvStore;
