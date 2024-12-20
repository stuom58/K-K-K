document.addEventListener('DOMContentLoaded', function() {
    fetch('./../component/load-footer.html') // مسیر صحیح به فایل footer.html
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
