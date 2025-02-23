document.querySelectorAll('.solution h3').forEach(function (header) {
    header.addEventListener('click', function () {
        let solution = this.nextElementSibling;
        if (solution.style.display === 'block') {
            solution.style.display = 'none';
        } else {
            solution.style.display = 'block';
        }
    });
});
