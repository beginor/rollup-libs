const arr = navigator.userAgent.split(' ');
const result = [];

let prod;

for (let item of arr) {
  const idx = item.indexOf('/');
  if (idx > 0) {
    const name = item.substring(0, idx);
    const version = item.substring(idx + 1);
    prod = { name, version, comment: '' };
    result.push(prod);
  } else {
    if (item.startsWith('(')) {
      prod.comment += item.substring(1);
    } else if (item.endsWith(')')) {
      prod.comment += ' ' + item.substring(0, item.length - 1);
    } else {
      prod.comment += ' ' + item;
    }
  }
}

// Write Javascript code!
const appDiv = document.getElementById('result');

appDiv.innerHTML += '<p> ' + navigator.userAgent + ' </p>';

result.forEach(item => {
  appDiv.innerHTML += `<p> ${JSON.stringify(item)} </p>`;
});
