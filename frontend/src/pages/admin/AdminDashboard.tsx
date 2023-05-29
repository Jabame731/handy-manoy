import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import NotAvailable from "../../components/NotAvailable";
import Sidebar from "../../components/Sidebar";
import { BsCurrencyDollar, BsPeople } from "react-icons/bs";
import { TbBox } from "react-icons/tb";
import { BsFillBarChartFill } from "react-icons/bs";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);
  const getCurrentRole = user?.user_role;
  if (getCurrentRole !== "admin") {
    return <NotAvailable />;
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-primary">
          <div className="flex flex-row ">
            <div className="basis-full p-5 d-flex flex-col items-start">
              <div className="flex flex-row justify-between items-center h-[60px]">
                <span className="text-xl text-dimWhite">Dashboard</span>
                <div className="flex items-center justify-evenly gap-6">
                  <p>
                    <span className="text-dimWhite"> Welcome </span>
                    <span className="text-white">sdfdsfsdfsdfsd</span>
                  </p>
                  <div className="flex items-center justify-evenly gap-6 ">
                    <img
                      src=""
                      alt=""
                      className="rounded-full mr-[100px] w-[60px] h-[60px]"
                    />
                  </div>
                </div>
              </div>
              {/* main-content */}
              <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="bg-blue-900 dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-dimWhite">Earnings</p>
                      <p className="text-2xl">$63,448.78</p>
                    </div>
                    <button
                      type="button"
                      className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4 bg-[#985e49]"
                    >
                      <BsCurrencyDollar />
                    </button>
                  </div>
                  <div className="mt-6">
                    <button>Download Information</button>
                  </div>
                </div>
                {/* customers --to--- final */}
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                  <div className="bg-blue-900 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                    <button
                      type="button"
                      className="text-2xl opacity-0.9 rounded-full bg-cyan-300 text-cyan-600  p-4 hover:drop-shadow-xl"
                    >
                      <BsPeople />
                    </button>
                    <p className="mt-3">
                      <span className="text-lg font-semibold">10,450</span>
                      <span className="text-sm text ml-2 text-red-600">
                        -10%
                      </span>
                    </p>
                    <p className="text-sm text-gray-400  mt-1">customers</p>
                  </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                  <div className="bg-blue-900 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                    <button
                      type="button"
                      className="text-2xl opacity-0.9 rounded-full bg-yellow-300 text-white  p-4 hover:drop-shadow-xl"
                    >
                      <TbBox />
                    </button>
                    <p className="mt-3">
                      <span className="text-lg font-semibold">13,500</span>
                      <span className="text-sm text ml-2 text-green-600">
                        +11%
                      </span>
                    </p>
                    <p className="text-sm text-gray-400  mt-1">Products</p>
                  </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                  <div className="bg-blue-900 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                    <button
                      type="button"
                      className="text-2xl opacity-0.9 rounded-full bg-red-300 text-red-600  p-4 hover:drop-shadow-xl"
                    >
                      <BsFillBarChartFill />
                    </button>
                    <p className="mt-3">
                      <span className="text-lg font-semibold">150,900</span>
                      <span className="text-sm text ml-2 text-green-600">
                        +14%
                      </span>
                    </p>
                    <p className="text-sm text-gray-400  mt-1">Sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
