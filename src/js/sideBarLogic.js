function openSideBar() {
  const menuItem = document.getElementsByClassName('MenuIcon')[0];
  menuItem.style.display = 'none';

  const sideBar = document.getElementsByClassName('SideBar')[0];
  sideBar.style.display = 'flex';
}

function closeSideBar() {
  const menuItem = document.getElementsByClassName('MenuIcon')[0];
  menuItem.style.display = 'flex';

  const sideBar = document.getElementsByClassName('SideBar')[0];
  sideBar.style.display = 'none';
}
