const container = document.getElementById('container');
window.addEventListener('load', () => {
  fetchData();
});

const fetchData = () => {
  fetch('https://json-pract.herokuapp.com/ipl')
    .then((response) => response.json())
    .then((results) => resultsdisplay(results));
};

function resultsdisplay(results) {
  results.map((result) => display(result));
}

const display = (result) => {
  const div = document.createElement('div');
  div.className = 'result';

  div.innerHTML = `
  <div>
  <img src="${result.Image_Id}" alt="">
  <div>
      <h4>{${result.Team_Name}}</h4>
      <button>${result.Team_Short_Code}</button>
  </div>
</div>`;

  container.append(div);
};
