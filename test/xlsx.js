await loadStyles([
  '/dist/libs/@tabler/core/css/tabler.min.css',
  '/dist/libs/@tabler/core/css/tabler-vendors.min.css',
]);

const container = document.getElementById('test-view');
const btn = document.createElement('button');
btn.innerText = 'Export XLSX'
btn.className = 'btn'
container.appendChild(btn);

btn.addEventListener("click", async () => {
  /* dynamically import the library in the event listener */
  const XLSX = await import("xlsx");

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([["a", "b", "c"], [1, 2, 3]]);
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, "SheetJSESMTest.xlsx");
});
