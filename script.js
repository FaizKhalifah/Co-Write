const toggleButton = document.getElementById('tombolToggle');
const sidebar = document.querySelector('.sideBar');
const kontenSideBar=document.querySelector('.kontenSideBar');

toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    toggleButton.classList.toggle('active');
});

const formSearch=document.forms["formSearch"].querySelector("input");
formSearch.addEventListener("keyup",function(e){
    const input = e.target.value.toLowerCase();
    const kumpulanProduk = document.querySelectorAll("#kontenProduk h1");
    kumpulanProduk.forEach(function(i){
        const namaProduk = i.innerText;
        if(namaProduk.toLowerCase().indexOf(input)!=-1){
           i.parentElement.parentElement.style.display="flex";
        }
        else{
            i.parentElement.parentElement.style.display="none";
        }
    })
})