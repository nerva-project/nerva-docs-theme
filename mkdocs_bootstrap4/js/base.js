/*
$('.dropdown-submenu > a').on("click", function(e) {
    var submenu = $(this);
    $('.dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function() {
    // hide any open menus when parent closes
    $('.dropdown-menu.show').removeClass('show');
});
*/

$( document ).ready( function () {

    $( '.contributors img[data-src]' ).each( function() {
        src = $(this).attr("data-src");
        $(this).attr('src',src);
    });
    $('.metadata').detach().insertAfter( '#content h1:first' );
} );

// Dark mode toggle — runs immediately since this script is deferred (DOM already parsed)
(function() {
    var btn = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-icon');

    function updateIcon() {
        var dark = document.documentElement.classList.contains('dark-mode');
        if (icon) icon.className = dark ? 'fa fa-sun-o' : 'fa fa-moon-o';
    }

    updateIcon();

    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            var dark = document.documentElement.classList.toggle('dark-mode');
            document.documentElement.style.backgroundColor = dark ? '#1a1d20' : '';
            localStorage.setItem('nerva-docs-theme', dark ? 'dark' : 'light');
            updateIcon();
        });
    }
}());
