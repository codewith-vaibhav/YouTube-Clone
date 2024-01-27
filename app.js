

document.addEventListener('DOMContentLoaded', function () {
  // Get references to the elements
  const menuIcon = document.getElementById('menuIcon');
  const leftSideNav = document.getElementById('leftSideNav');

  // Add click event listener to the menu icon
  menuIcon.addEventListener('click', function () {
    // Toggle the 'hide' class on the left side nav
    leftSideNav.classList.toggle('hide');
  });
});






// // const menu = document.querySelector('#menu');
// // console.log(menu);
// // const sidebar = document.querySelector('.sidebar');
// // console.log(sidebar);

// // menu.addEventListener('click', function () {
// //   sidebar.classList.toggle('show-sidebar');
// // });

// function toggleSidebar() {
//   var sidebar = document.querySelector('.sidebar');
//   var mainContent = document.querySelector('.main-content');

//   // Toggle the sidebar by adjusting the left property
//   if (sidebar.style.left === '-250px') {
//       sidebar.style.left = '0';
//       mainContent.style.marginLeft = '250px';
//   } else {
//       sidebar.style.left = '-250px';
//       mainContent.style.marginLeft = '0';
//   }
// }





