
document.getElementById('xport').addEventListener("click", async () => {
  /* dynamically import the library in the event listener */
  const XLSX = await import("xlsx");

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([["a", "b", "c"], [1, 2, 3]]);
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, "SheetJSESMTest.xlsx");
});
