$(document).ready(function() {
    
    fetch('https://api.coinmarketcap.com/v1/ticker/steem/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        sessionStorage.setItem("steem_price",data[0].price_usd);
        $(".steem_price").html(Number(sessionStorage.getItem("steem_price")).toFixed(2));
    })
    .catch(function(err) {
        console.log('coinmarketcap.com is not reachable : cannot get Steem price', err.code, err.message);
    });

    fetch('https://api.coinmarketcap.com/v1/ticker/steem-dollars/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        sessionStorage.setItem("sbd_price",data[0].price_usd);
        $(".sbd_price").html(Number(sessionStorage.getItem("sbd_price")).toFixed(2));
    })
    .catch(function(err) {
        console.log('coinmarketcap.com is not reachable : cannot get Steem Dollars price', err.code, err.message);
    });

    fetch('https://www.apilayer.net/api/live?access_key=4d73aac2ff6459c12dbef1d8f6530845&format=1')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        sessionStorage.setItem("USD_price_xof",data.quotes['USDXOF']);
        sessionStorage.setItem("USD_price_xaf",data.quotes['USDXAF']);
        sessionStorage.setItem("USD_price_ngn",data.quotes['USDNGN']);
        sessionStorage.setItem("USD_price_ghs",data.quotes['USDGHS']);
        sessionStorage.setItem("USD_price_zar",data.quotes['USDZAR']);
        sessionStorage.setItem("USD_price_ugx",data.quotes['USDUGX']);
        sessionStorage.setItem("USD_price_kes",data.quotes['USDKES']);
    })
    .catch(function(err) {
        console.log('currencylayer.com not reachable : cannot get USD price', err.code, err.message);
    });

setInterval(function(){

    fetch('https://api.coinmarketcap.com/v1/ticker/steem/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        sessionStorage.setItem("steem_price",data[0].price_usd);
        $(".steem_price").html(Number(sessionStorage.getItem("steem_price")).toFixed(2));
    })
    .catch(function(err) {
        console.log('coinmarketcap.com is not reachable : cannot get Steem price', err.code, err.message);
    });

    fetch('https://api.coinmarketcap.com/v1/ticker/steem-dollars/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        sessionStorage.setItem("sbd_price",data[0].price_usd);
        $(".sbd_price").html(Number(sessionStorage.getItem("sbd_price")).toFixed(2));
    })
    .catch(function(err) {
        console.log('coinmarketcap.com is not reachable : cannot get Steem Dollars price', err.code, err.message);
    });

    fetch('https://www.apilayer.net/api/live?access_key=4d73aac2ff6459c12dbef1d8f6530845&format=1')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        sessionStorage.setItem("USD_price_xof",data.quotes['USDXOF']);
        sessionStorage.setItem("USD_price_xaf",data.quotes['USDXAF']);
        sessionStorage.setItem("USD_price_ngn",data.quotes['USDNGN']);
        sessionStorage.setItem("USD_price_ghs",data.quotes['USDGHS']);
        sessionStorage.setItem("USD_price_zar",data.quotes['USDZAR']);
        sessionStorage.setItem("USD_price_ugx",data.quotes['USDUGX']);
        sessionStorage.setItem("USD_price_kes",data.quotes['USDKES']);
    })
    .catch(function(err) {
        console.log('currencylayer.com not reachable : cannot get USD price', err.code, err.message);
    });

    $(".steem_price").html(Number(sessionStorage.getItem("steem_price")).toFixed(2));
    $(".sbd_price").html(Number(sessionStorage.getItem("sbd_price")).toFixed(2));

    }, 300000);

});

    $("#steem").on("keyup", function() {
    var steem_price_xof = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_xof")
    $("#xof").val(Number(this.value * steem_price_xof).toFixed(2));
    var sbd_price_xof = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_xof")
    var sbd_xof = this.value * steem_price_xof / sbd_price_xof
    $("#sbd").val(Number(sbd_xof).toFixed(2));

    var steem_price_xaf = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_xaf")
    $("#xaf").val(Number(this.value * steem_price_xaf).toFixed(2));
    var sbd_price_xaf = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_xaf")
    var sbd_xaf = this.value * steem_price_xaf / sbd_price_xaf
    $("#sbd").val(Number(sbd_xaf).toFixed(2));

    var steem_price_ngn = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ngn")
    $("#ngn").val(Number(this.value * steem_price_ngn).toFixed(2));
    var sbd_price_ngn = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ngn")
    var sbd_ngn = this.value * steem_price_ngn / sbd_price_ngn
    $("#sbd").val(Number(sbd_ngn).toFixed(2));

    var steem_price_ghs = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ghs")
    $("#ghs").val(Number(this.value * steem_price_ghs).toFixed(2));
    var sbd_price_ghs = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ghs")
    var sbd_ghs = this.value * steem_price_ghs / sbd_price_ghs
    $("#sbd").val(Number(sbd_ghs).toFixed(2));

    var steem_price_zar = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_zar")
    $("#zar").val(Number(this.value * steem_price_zar).toFixed(2));
    var sbd_price_zar = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_zar")
    var sbd_zar = this.value * steem_price_zar / sbd_price_zar
    $("#sbd").val(Number(sbd_zar).toFixed(2));

    var steem_price_ugx = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ugx")
    $("#ugx").val(Number(this.value * steem_price_ugx).toFixed(2));
    var sbd_price_ugx = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ugx")
    var sbd_ugx = this.value * steem_price_ugx / sbd_price_ugx
    $("#sbd").val(Number(sbd_ugx).toFixed(2));

    var steem_price_kes = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_kes")
    $("#kes").val(Number(this.value * steem_price_kes).toFixed(2));
    var sbd_price_kes = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_kes")
    var sbd_kes = this.value * steem_price_kes / sbd_price_kes
    $("#sbd").val(Number(sbd_kes).toFixed(2));

    });
    $("#sbd").on("keyup", function() {
    var sbd_price_xof = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_xof")
    $("#xof").val(Number(this.value * sbd_price_xof).toFixed(2));
    var steem_price_xof = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_xof")
    var steem_xof = this.value * sbd_price_xof / steem_price_xof
    $("#steem").val(Number(steem_xof).toFixed(2));

    var sbd_price_xaf = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_xaf")
    $("#xaf").val(Number(this.value * sbd_price_xaf).toFixed(2));
    var steem_price_xaf = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_xaf")
    var steem_xaf = this.value * sbd_price_xaf / steem_price_xaf
    $("#steem").val(Number(steem_xaf).toFixed(2));

    var sbd_price_ngn = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ngn")
    $("#ngn").val(Number(this.value * sbd_price_ngn).toFixed(2));
    var steem_price_ngn = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ngn")
    var steem_ngn = this.value * sbd_price_ngn / steem_price_ngn
    $("#steem").val(Number(steem_ngn).toFixed(2));

    var sbd_price_ghs = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ghs")
    $("#ghs").val(Number(this.value * sbd_price_ghs).toFixed(2));
    var steem_price_ghs = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ghs")
    var steem_ghs = this.value * sbd_price_ghs / steem_price_ghs
    $("#steem").val(Number(steem_ghs).toFixed(2));

    var sbd_price_zar = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_zar")
    $("#zar").val(Number(this.value * sbd_price_zar).toFixed(2));
    var steem_price_zar = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_zar")
    var steem_zar = this.value * sbd_price_zar / steem_price_zar
    $("#steem").val(Number(steem_zar).toFixed(2));

    var sbd_price_ugx = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ugx")
    $("#ugx").val(Number(this.value * sbd_price_ugx).toFixed(2));
    var steem_price_ugx = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ugx")
    var steem_ugx = this.value * sbd_price_ugx / steem_price_ugx
    $("#steem").val(Number(steem_ugx).toFixed(2));

    var sbd_price_kes = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_kes")
    $("#kes").val(Number(this.value * sbd_price_kes).toFixed(2));
    var steem_price_kes = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_kes")
    var steem_kes = this.value * sbd_price_kes / steem_price_kes
    $("#steem").val(Number(steem_kes).toFixed(2));

    });

    $("#xof").on("keyup", function() {
    var steem_price_xof = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_xof")
    $("#steem").val(Number(this.value / steem_price_xof).toFixed(2));
    var sbd_price_xof = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_xof")
    $("#sbd").val(Number(this.value / sbd_price_xof).toFixed(2));
    });

    $("#xaf").on("keyup", function() {
    var steem_price_xaf = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_xaf")
    $("#steem").val(Number(this.value / steem_price_xaf).toFixed(2));
    var sbd_price_xaf = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_xaf")
    $("#sbd").val(Number(this.value / sbd_price_xaf).toFixed(2));
    });

    $("#ngn").on("keyup", function() {
    var steem_price_ngn = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ngn")
    $("#steem").val(Number(this.value / steem_price_ngn).toFixed(2));
    var sbd_price_ngn = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ngn")
    $("#sbd").val(Number(this.value / sbd_price_ngn).toFixed(2));
    });

    $("#ghs").on("keyup", function() {
    var steem_price_ghs = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ghs")
    $("#steem").val(Number(this.value / steem_price_ghs).toFixed(2));
    var sbd_price_ghs = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ghs")
    $("#sbd").val(Number(this.value / sbd_price_ghs).toFixed(2));
    });

    $("#zar").on("keyup", function() {
    var steem_price_zar = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_zar")
    $("#steem").val(Number(this.value / steem_price_zar).toFixed(2));
    var sbd_price_zar = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_zar")
    $("#sbd").val(Number(this.value / sbd_price_zar).toFixed(2));
    });

    $("#ugx").on("keyup", function() {
    var steem_price_ugx = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_ugx")
    $("#steem").val(Number(this.value / steem_price_ugx).toFixed(2));
    var sbd_price_ugx = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_ugx")
    $("#sbd").val(Number(this.value / sbd_price_ugx).toFixed(2));
    });

    $("#kes").on("keyup", function() {
    var steem_price_kes = sessionStorage.getItem("steem_price") * sessionStorage.getItem("USD_price_kes")
    $("#steem").val(Number(this.value / steem_price_kes).toFixed(2));
    var sbd_price_kes = sessionStorage.getItem("sbd_price") * sessionStorage.getItem("USD_price_kes")
    $("#sbd").val(Number(this.value / sbd_price_kes).toFixed(2));
    });
