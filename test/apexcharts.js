import ApexCharts from "apexcharts";

const res = await fetch('/dist/libs/apexcharts/locales/zh-cn.json');
const json = await res.json();


/** @type {import("apexcharts").ApexOptions } */
const options = {
  chart: {
    locales: [json],
    defaultLocale: 'zh-cn',
    type: "area",
    fontFamily: 'inherit',
    height: 480,
    width: 960,
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    animations: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: .16,
    type: 'solid'
  },
  stroke: {
    width: 2,
    lineCap: "round",
    curve: "smooth",
  },
  series: [{
    name: "series1",
    data: [56, 40, 39, 47, 34, 48, 44]
  },{
    name: "series2",
    data: [45, 43, 30, 23, 38, 39, 54]
  }],
  tooltip: {
    theme: 'dark'
  },
  grid: {
    padding: {
      top: -20,
      right: 0,
      left: -4,
      bottom: -4
    },
    strokeDashArray: 4,
  },
  xaxis: {
    labels: {
      padding: 0,
    },
    tooltip: {
      enabled: false
    },
    axisBorder: {
      show: false,
    },
    type: 'datetime',
  },
  yaxis: {
    labels: {
      padding: 4
    },
  },
  labels: [
    '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27'
  ],
  colors: [tabler.getColor("primary"), tabler.getColor("purple")],
  legend: {
    show: true,
    position: 'bottom',
    offsetY: 12,
    markers: {
      width: 10,
      height: 10,
      radius: 100,
    },
    itemMargin: {
      horizontal: 8,
      vertical: 8
    },
  },
};
const chart = new ApexCharts(
  document.getElementById('charts'),
  options
);
chart.render();
