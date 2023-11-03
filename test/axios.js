import axios from 'axios';

const container = document.getElementById('test-view');
container.classList.add('p-3');

const btn = document.createElement('button');
btn.className = 'btn btn-primary';
btn.innerHTML = 'Test'
container.appendChild(btn);

container.appendChild(document.createElement('hr'));

const result = document.createElement('textarea');
result.rows = 10;
container.appendChild(result);

btn.addEventListener('click', async e => {
  const res = await axios.get('/importmap.json');
  const data = res.data;
  result.innerHTML = JSON.stringify(data, null, 2);
});
