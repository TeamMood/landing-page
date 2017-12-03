var params = window.location.search;


if (params && params !== '') {
    document.cookie = "params="+ encodeURIComponent(params);
}

