const toggleButton = document.getElementById('tombolToggle');
const sidebar = document.querySelector('.sideBar');
const kontenSideBar=document.querySelector('.kontenSideBar');

toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    toggleButton.classList.toggle('active');
});