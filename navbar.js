const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-gray-800');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-gray-800');
    navbar.classList.add('bg-transparent');
  }
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.onclick = function() {
                mobileMenu.classList.add('hidden');
            };
        });
    }
}
