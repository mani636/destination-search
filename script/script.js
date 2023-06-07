'use strict';

// function
const search = () => {
  // elements
  const searchBox = document.querySelector('.search-box');
  const filter = searchBox.value.toUpperCase();
  const ul = document.getElementById('list-container');
  const li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    let p = li[i].getElementsByTagName('p')[0];
    let txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
};
