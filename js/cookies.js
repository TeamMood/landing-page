var params = window.location.search;


if (params && params !== '') {
    document.cookie = "params="+ encodeURIComponent(params)+";domain=.teammood.com;path=/";
}

