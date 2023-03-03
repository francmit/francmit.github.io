var hash = location.hash.replace(/^#/, '');  // ^ means starting, meaning only match the first hash

if (hash) {
    $('.nav-tabs a[href="#' + hash + '"]').tab('show');
    window.scrollTo(0, 0);
} 