import { useUserStores } from "@/stores/user-store";

export const ComponentWithStoreThree = () => {
  const { toggleLogin, incrementAge, isLogged, age } = useUserStores();

  return (
    // <div className="p-4 bg-white shadow-md rounded-lg">
    //   <h2 className="text-2xl font-bold mb-4">User Settings</h2>
    //   <div className="mb-4">
    //     <p className="text-lg">Logged in: {isLogged ? "Yes" : "No"}</p>
    //     <button
    //       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
    //       onClick={toggleLogin}
    //     >
    //       Toggle Login
    //     </button>
    //   </div>
    //   <div>
    //     <p className="text-lg">Age: {age}</p>
    //     <button
    //       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
    //       onClick={incrementAge}
    //     >
    //       Increment Age
    //     </button>
    //   </div>
    // </div>

    <div>
      <div className="px-4 sm:px-0 mt-5">
        <h3 className="text-xl font-semibold text-gray-900">User Settings</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Logged in:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {isLogged ? "Yes" : "No"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900"></dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <a
                href="javascript:void(0)"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={toggleLogin}
              >
                Toggle Login
              </a>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              <dt className="text-sm/6 font-medium text-gray-900">Age:</dt>
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {age}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900"></dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <a
                href="javascript:void(0)"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={incrementAge}
              >
                Increment Age
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
