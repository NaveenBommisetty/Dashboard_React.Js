"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    height: 350,
    type: 'bar',
  },
  colors: ["#5a32ea"],
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
      // colors: ["#FF5733", "#3498DB", "#F1C40F", "#27AE60", "#9B59B6", "#E74C3C", "#34495E", "#E67E22", "#D35400", "#16A085", "#E84118", "#8E44AD"],
    }
  },
  // dataLabels: {
  //   enabled: true,
  //   formatter: function (val) {
  //     return val + "%";
  //   },
  //   offsetY: -20,
  //   style: {
  //     fontSize: '12px',
  //     colors: ["#304758"]
  //   }
  // },

  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#f2efff',
          colorTo: '#5a32ea',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    // labels: {
    //   show: false,
    //   formatter: function (val) {
    //     return val + "%";
    //   }
    // }

  },
  // title: {
  //   text: 'Monthly Inflation in Argentina, 2002',
  //   floating: true,
  //   offsetY: 330,
  //   align: 'center',
  //   style: {
  //     color: '#444'
  //   }
  // }
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];       
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Inflation',
        data: [6, 8, 4, 10.1, 9, 6, 2, 5, 7, 3,9, 10],
      },

    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  handleReset;

  // NextJS Requirement
  const isWindowAvailable = () => typeof window !== "undefined";

  if (!isWindowAvailable()) return <></>;

  return (
    <div className="col-span-12 rounded-lg bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Overview</p>
              <p className="text-sm font-medium">Monthly Earning</p>
            </div>
          </div>          
        </div>       
      </div>

      <div>
        <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
