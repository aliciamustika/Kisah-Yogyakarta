const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');
const buttonList = document.getElementById('buttonList');
const listHalaman = document.getElementById('listHalaman');

buttonList.addEventListener('click', function() {
    // Periksa apakah unordered list ditampilkan atau tidak
    if (listHalaman.style.display === 'none') {
        // Jika tidak ditampilkan, tampilkan unordered list
        listHalaman.style.display = 'block';
    } else {
        // Jika ditampilkan, sembunyikan unordered list
        listHalaman.style.display = 'none';
    }
});

menuButton.addEventListener('click', function() {
    // Periksa apakah unordered list ditampilkan atau tidak
    if (menuList.style.display === 'none') {
        // Jika tidak ditampilkan, tampilkan unordered list
        menuList.style.display = 'block';
    } else {
        // Jika ditampilkan, sembunyikan unordered list
        menuList.style.display = 'none';
    }
});
