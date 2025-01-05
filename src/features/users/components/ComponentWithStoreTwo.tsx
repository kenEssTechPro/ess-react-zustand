import { useUserStores } from "@/stores/user-store";

export const ComponentWithStoreTwo = () => {
  const { age, username } = useUserStores();

  return (
    <div>
      <div className="px-4 sm:px-0 mt-5">
        <h3 className="text-xl font-semibold text-gray-900">User Profile</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Username:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {username}
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
        </dl>
      </div>
    </div>
  );
};
