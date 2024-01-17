document.getElementById('goTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Sayfa scroll olduğunda butonu gizle veya göster
window.addEventListener('scroll', function() {
    var goTopButton = document.getElementById('goTopButton');
    
    if (window.scrollY > 200) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});

