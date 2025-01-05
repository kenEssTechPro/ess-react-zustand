import { useUserStores } from "@/stores/user-store";

export const ComponentWithStore = () => {
  const {
    appContent,
    isLogged,
    age,
    username,
    hobbies,
    address,
    toggleLogin,
    incrementAge,
    setUsername,
    addHobby,
    setAddress,
  } = useUserStores();

  console.log("useUserStores", hobbies);

  const onKeyDownHobby = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addHobby((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value = "";
    }
  };

  return (
    <>
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base/7 font-semibold text-gray-900">
            {appContent.heading}
          </h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            {appContent.reactivedataExampleOne}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Logged in:
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isLogged ? "Yes" : "No"}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900"></dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                  onClick={toggleLogin}
                >
                  Toggle Login
                </button>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                <p className="text-lg">Age: </p>
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {age}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900"></dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
                  onClick={incrementAge}
                >
                  Increment Age
                </button>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Username:</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {username}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900"></dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  className="border border-gray-300 p-2 rounded w-full"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Hobbies:</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="list-disc list-inside">
                  {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900"></dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  className="border border-gray-300 p-2 rounded mt-2 w-full"
                  placeholder="Add a hobby"
                  onKeyDown={onKeyDownHobby}
                />
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Address:</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {address.street}, {address.city}, {address.zip}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900"></dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-2"
                  onClick={() =>
                    setAddress({
                      street: "456 Elm St",
                      city: "Othertown",
                      zip: "67890",
                    })
                  }
                >
                  Change Address
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};
