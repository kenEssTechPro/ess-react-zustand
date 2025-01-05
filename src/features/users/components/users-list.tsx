import { ComponentWithStore } from "./ComponentWithStore";
import { ComponentWithStoreThree } from "./ComponentWithStoreThree";
import { ComponentWithStoreTwo } from "./ComponentWithStoreTwo";

export const UsersList = () => {
  return (
    <>
      <ComponentWithStore />
      <hr />
      <ComponentWithStoreTwo />
      <hr />
      <ComponentWithStoreThree />
    </>
  );
};
