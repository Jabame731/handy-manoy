import React from "react";
import Sidebar from "../../components/Sidebar";

const UsersList = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-primary">
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
          <div className="flex items-center justify-between pb-6">
            <div>
              <h2 className="font-semibold text-gray-700">User Accounts</h2>
              <span className="text-xs text-gray-500">
                View accounts of registered users
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="ml-10 space-x-8 lg:ml-40">
                <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                  CSV
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">ID</th>
                    <th className="px-5 py-3">Full Name</th>
                    <th className="px-5 py-3">User Role</th>
                    <th className="px-5 py-3">Created at</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 items-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr>
                    <td className="border-b border-gray-200 bg-primary px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">3</p>
                    </td>
                    <td className="border-b border-gray-200 bg-primary px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="/images/-ytzjgg6lxK1ICPcNfXho.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">Besique Monroe</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-primary px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">Administrator</p>
                    </td>
                    <td className="border-b border-gray-200 bg-primary px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">Sep 28, 2022</p>
                    </td>

                    <td className="border-b border-gray-200 bg-primary px-5 py-5 text-sm">
                      <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                        Active
                      </span>
                    </td>
                    <td>
                      <div className="flex justify-center ite">
                        <button
                          className="text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm"
                          type="submit"
                        >
                          Edit
                        </button>
                        <button
                          className="text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm"
                          type="submit"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersList;
