document.addEventListener('DOMContentLoaded', function() {
    // Check if cookies were previously accepted
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const cookieBanner = document.getElementById('cookieBanner');

    if (cookiesAccepted) {
        cookieBanner.style.display = 'none';
    }
});

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieBanner').style.display = 'none';
}