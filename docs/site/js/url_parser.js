function print_param(key, default_value) {
    var url = window.location;
    var params = url.search.replace("\?","");
    var params_split = params.split("&");
    for (var i=0; i<params_split.length; i++) {
        var param_split = params_split[i].split("=");
        if (param_split[0] === key) {
            document.write(param_split[1]);
            return;
        }
    }
    document.write(default_value);
}
