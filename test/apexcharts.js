import ApexCharts from "apexcharts";

/** @type {import("apexcharts").ApexOptions } */
const options = {
  xaxis: { tooltip: {} }
};
const chart = new ApexCharts('', options);
chart.render();
