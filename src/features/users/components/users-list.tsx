import { ComponentWithStore } from "./component-with-store";
import { ComponentWithStoreThree } from "./component-with-store-three";
import { ComponentWithStoreTwo } from "./component-with-store-two";

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
