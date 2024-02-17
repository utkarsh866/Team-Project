const togglefun = () =>{
  const navItems = document.querySelector('.nav-items');

    navItems.style.display = navItems.style.display === 'none' ? 'flex' : 'none';
    console.log(navItems.style.display);
 
}
togglefun()
document.querySelector('.menu-icn').addEventListener('click', togglefun);
