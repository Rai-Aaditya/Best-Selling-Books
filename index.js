const viewBooksBtn = document.getElementById('viewBooks');
let val = viewBooksBtn.addEventListener('click', displayBooks);
let displayTable = document.getElementById('displayTable')
function displayBooks() {
  fetch('https://script.google.com/macros/s/AKfycbxyaUTPSKAQ3os-KL24yrskVLc8Ty7HWZf7kXoechVaytihtVxUuBBqJXbAe8Ey7PdZBg/exec', {
    method: 'GET',
  }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error);
    })
    .then(response => {
      let flag = true;
      let val = response.data;
      let cnt = 0


      val.forEach(element => {
        if (cnt == 0) {
          let row = document.createElement('tr');
          let title = document.createElement('td');
          title.textContent = element.title;
          title.classList.add('table-dark', 'cell');
          row.appendChild(title);

          let price = document.createElement('td');
          price.textContent = element.price;
          price.classList.add('table-dark');
          row.appendChild(price);

          let genre = document.createElement('td');
          genre.textContent = element.genre;
          genre.classList.add('table-dark');
          row.appendChild(genre);
          displayTable.appendChild(row);
          cnt = 1;
          return;
        }


        let row = document.createElement('tr');
        if (flag) {
          row.classList.add('table-danger');

          let title = document.createElement('td');
          title.textContent = element.title;
          title.classList.add('table-danger', 'cell');
          row.appendChild(title);

          let price = document.createElement('td');
          price.textContent = element.price + '$';
          price.classList.add('table-danger');
          row.appendChild(price);

          let genre = document.createElement('td');
          genre.textContent = element.genre;
          genre.classList.add('table-danger');
          row.appendChild(genre);
        }


        else {
          row.classList.add('table-success');

          let title = document.createElement('td');
          title.textContent = element.title;
          title.classList.add('table-success', 'cell');
          row.appendChild(title);

          let price = document.createElement('td');
          price.textContent = element.price + '$';
          price.classList.add('table-success');
          row.appendChild(price);

          let genre = document.createElement('td');
          genre.textContent = element.genre;
          genre.classList.add('table-success');
          row.appendChild(genre);
        }


        flag = !flag;
        displayTable.appendChild(row);
      });
    });
}

