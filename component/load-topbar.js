document.addEventListener('DOMContentLoaded', function() {
    fetch('./../component/topbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data); // افزودن نوار بالا به ابتدای بدنه
        });
});
