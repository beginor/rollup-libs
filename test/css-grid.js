await loadStyle('./css-grid.css');

const container = document.getElementById('test-view');

container.innerHTML = `
<div class="d-grid grid-container bg-light p-3" style="">
<div class="item1 p-3 rounded border border-warning bg-warning-lt text-warning text-center">
  Item 1
</div>
<div class="item2 p-3 rounded border border-primary bg-primary-lt text-primary">
  Item 2
</div>
<div class="item3 p-3 rounded border border-yellow bg-yellow-lt text-yellow">
  Item 3
</div>
<div class="item4 p-3 rounded border border-red bg-red-lt text-red">
  Item 4
</div>
<div class="item5 p-3 rounded border border-warning bg-warning-lt text-warning">
  Item 5
</div>
<div class="item6 p-3 rounded border border-warning bg-warning-lt text-warning">
  Item 6
</div>
<div class="item7 p-3 rounded border border-warning bg-warning-lt text-warning">
  Item 7
</div>
</div>
`;
