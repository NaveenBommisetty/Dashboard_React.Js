import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/product/product-01.png",
    name: "Abstract 3D",
    description: "A product name is required and recommended to be unique.",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/product/product-02.png",
    name: "Macbook Air M1",
    description: "A product name is required and recommended to be unique.",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/product/product-03.png",
    name: "Github",
    description: "A product name is required and recommended to be unique.",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/product/product-04.png",
    name: "Vimeo",
    description: "A product name is required and recommended to be unique.",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/product/product-01.png",
    name: "Facebook",
    description: "A product name is required and recommended to be unique.",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-lg bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Product Sell
        </h4>
        <div className="flex item-center gap-4">
          <div className="hidden sm:block">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative bg-[#fafbff] rounded-lg">
                <button className="absolute left-[10px] top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="search..."
                  className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none rounded p-2"
                />
              </div>
            </form>
          </div>
          <div className="">
            <select className="bg-transparent text-sm flex items-center bg-[#fafbff] rounded-lg p-2 pr-3 min-h-[40px]">
              <option>Last 30 days</option>
              <option>Last 20 days</option>
              <option>Last 10 days</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="lg:overflow-x-hidden overflow-x-auto">
        <table className="table-auto w-full mt-4">
          <thead>
            <tr className="border-b border-stroke">
              <th className="text-left p-2"><h5 className="text-sm font-medium xsm:text-base">
                Product Name
              </h5></th>
              <th className="text-left p-2"><h5 className="text-sm font-medium xsm:text-base">
                Stock
              </h5></th>
              <th className="text-left p-2"><h5 className="text-sm font-medium xsm:text-base">
                Price
              </h5></th>
              <th className="text-left p-2"><h5 className="text-sm font-medium xsm:text-base">
                Total Sales
              </h5></th>
            </tr>
          </thead>
          <tbody>
            {brandData.map((brand, key) => (
              <tr
                className={`${key === brandData.length - 1
                  ? ""
                  : ""
                  }`}
                key={key}
              >
                <td className="p-2"><div className="flex items-center gap-3 p-2 xl:p-5">
                  <div className="flex-shrink-0">
                    <Image src={brand.logo} alt="Brand" width={48} height={48} />
                  </div>
                  <div className="lg:whitespace-nowrap">
                    <p className="text-black dark:text-white sm:block font-bold text-base">
                      {brand.name}
                    </p>
                    <p className="text-black dark:text-white sm:block text-sm">
                      {brand.description}
                    </p>
                  </div>
                </div></td>
                <td className="p-2"> <p className="text-black dark:text-white">{brand.visitors}K</p></td>
                <td className="p-2"><p className="text-meta-3">${brand.revenues}</p></td>
                <td className="p-2"><p className="text-black dark:text-white">{brand.sales}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
