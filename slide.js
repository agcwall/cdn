$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 8,
                nav: true,
                margin: 5
            }
        }
    })
})
</script>
<script>
$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
});