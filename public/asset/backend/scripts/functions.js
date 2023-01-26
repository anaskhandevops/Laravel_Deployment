'use strict';

function isError(element, message) {
    var el = $(element);
    el.parent().removeClass('has-success').addClass('has-danger')
    el.removeClass('form-control-success').addClass('form-control-danger')
    el.next().text(message).removeClass('text-success').addClass('text-danger');
    el.attr('data-valid', false);
}

function isSuccess(element, message) {
    var el = $(element);
    el.parent().removeClass('has-danger').addClass('has-success')
    el.removeClass('form-control-danger').addClass('form-control-success')
    el.next().text(message).removeClass('text-danger').addClass('text-success');
    el.attr('data-valid', true);
}

function resetMessages(element) {
    var el = $(element);
    el.parent().removeClass('has-danger').removeClass('has-success')
    el.removeClass('form-control-danger').removeClass('form-control-success')
    el.next().text('');
}

function validateOnChange(element, rules, successMessage, errorMessage) {
    $(document).on('focus', element, function(e) {
        e.preventDefault();
        //resetMessages(element);
        return false;
    });
    $(document).on('blur', element, function(e) {
        e.preventDefault();
        var result = approve.value($(element).val(), rules);
        if (result.approved) {
            isSuccess(element, successMessage);
        } else {
            isError(element, errorMessage);
        }
        return false;
    })
}

function animatedPeityBar(element, height, color) {
    var chart = $(element).peity('bar', {
        height: height,
        width: '100%',
        fill: [color]
    });
    setInterval(function() {
        var random = Math.floor(Math.random() * 10) + 2;
        var values = chart.text().split(',');
        values.shift();
        values.push(random);
        chart.text(values.join(',')).change();
    }, 1000);
}

function animatedPeityArea(element, height, color) {
    var chart = $(element).peity('line', {
        height: height,
        width: '100%',
        fill: color,
        stroke: color
    });
    setInterval(function() {
        var random = Math.floor(Math.random() * 10) + 2;
        var values = chart.text().split(',');
        values.shift();
        values.push(random);
        chart.text(values.join(',')).change();
    }, 1000);
}

function animatedPeityLine(element, height, color) {
    var chart = $(element).peity('line', {
        height: height,
        width: '100%',
        fill: 'white',
        stroke: color
    });
    setInterval(function() {
        var random = Math.floor(Math.random() * 10) + 2;
        var values = chart.text().split(',');
        values.shift();
        values.push(random);
        chart.text(values.join(',')).change();
    }, 1000);
}

function animatedLineChart(id, color) {
    var lineChart = echarts.init(document.getElementById(id));

    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
                Math.round(value)
            ]
        };
    }
    var data = [];
    var now = new Date(2010, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        data.push(randomData());
    }
    var option = {
        color: [color],
        title: {
            text: null
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            show: false,
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            show: false,
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: 'Serie A',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
        }]
    };
    lineChart.setOption(option);
    setInterval(function() {
        for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
        }
        lineChart.setOption({
            series: [{
                data: data
            }]
        });
    }, 1000);
}

function peityDonut(element, radius, colors) {
    return $(element).peity('donut', {
        width: radius,
        radius: radius,
        fill: colors
    });
}

function peityPie(element, radius, colors) {
    return $(element).peity('pie', {
        height: radius,
        width: radius,
        radius: radius,
        fill: colors
    });
}

function peityBar(element, height, width, color) {
    return $(element).peity('bar', {
        height: height,
        width: width,
        fill: [color]
    });
}

function peityLine(element, height, width, color) {
    return $(element).peity('line', {
        height: height,
        width: width,
        fill: color,
        stroke: color
    });
}

function element_exists(id) {
        if ($(id).length === 0) {
            return false;
        }
        return true;
    }
    //http://www.sitepoint.com/javascript-generate-lighter-darker-color/

function colorLuminance(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        var rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }
    //http://stackoverflow.com/questions/21646738/convert-hex-to-rgba

function hexToRgbA(hex, opacity) {
    var c;
    var o = opacity || 1;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + o + ')';
    }
    return false;
}

function incrementingData() {
    var series = [];
    var labels = [];
    for (var x = 0; x < 50; x++) {
        if (x % 2 === 0) {
            continue;
        }
        labels.push('Label ' + x);
        series.push(Functions.random(x, x + 10));
    }
    return {
        series: series,
        labels: labels
    }
}

function decrementingData() {
    var series = [];
    var labels = [];
    for (var x = 50; x > 0; x--) {
        if (x % 2 === 0) {
            continue;
        }
        labels.push('Label ' + x);
        series.push(Functions.random(x + 10, x));
    }
    return {
        series: series,
        labels: labels
    }
}

function randomData() {
    var series = [];
    var labels = [];
    for (var x = 0; x < 30; x++) {
        labels.push('Label ' + x);
        series.push(Functions.random(20, 80));
    }
    return {
        series: series,
        labels: labels
    }
}

function reverseArray(input) {
    var ret = [];
    for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lighten(col, amt) {
    amt = Math.abs(amt);
    amt = amt / 100;
    return colorLuminance(col, amt);
}

function darken(col, amt) {
    amt = Math.abs(amt);
    amt = (amt / 100) * -1;
    return colorLuminance(col, amt);
}

function bitcoinData() {
    return [{
        key: "EUR",
        values: [
            [
                1439763668000,
                232
            ],
            [
                1440109268000,
                206
            ],
            [
                1440282068000,
                113
            ],
            [
                1440627668000,
                125
            ],
            [
                1440800468000,
                278
            ],
            [
                1441146068000,
                246
            ],
            [
                1441318868000,
                156
            ],
            [
                1441664468000,
                173
            ],
            [
                1441837268000,
                153
            ],
            [
                1442182868000,
                239
            ],
            [
                1442355668000,
                268
            ],
            [
                1442701268000,
                295
            ],
            [
                1442874068000,
                169
            ],
            [
                1443219668000,
                230
            ],
            [
                1443392468000,
                295
            ],
            [
                1443738068000,
                271
            ],
            [
                1443910868000,
                201
            ],
            [
                1444256468000,
                289
            ],
            [
                1444429268000,
                352
            ],
            [
                1444774868000,
                194
            ],
            [
                1444947668000,
                246
            ],
            [
                1445293268000,
                215
            ],
            [
                1445466068000,
                172
            ],
            [
                1445811668000,
                245
            ],
            [
                1445984468000,
                301
            ],
            [
                1446330068000,
                279
            ],
            [
                1446502868000,
                189
            ],
            [
                1446848468000,
                189
            ],
            [
                1447021268000,
                272
            ],
            [
                1447366868000,
                377
            ],
            [
                1447539668000,
                304
            ],
            [
                1447885268000,
                212
            ],
            [
                1448058068000,
                286
            ],
            [
                1448403668000,
                320
            ],
            [
                1448576468000,
                235
            ],
            [
                1448922068000,
                260
            ],
            [
                1449094868000,
                256
            ],
            [
                1449440468000,
                282
            ],
            [
                1449613268000,
                319
            ],
            [
                1449958868000,
                295
            ],
            [
                1450131668000,
                400
            ],
            [
                1450477268000,
                266
            ],
            [
                1450650068000,
                262
            ],
            [
                1450995668000,
                242
            ],
            [
                1451168468000,
                363
            ],
            [
                1451514068000,
                425
            ],
            [
                1451686868000,
                375
            ],
            [
                1452032468000,
                425
            ],
            [
                1452205268000,
                368
            ],
            [
                1452550868000,
                381
            ],
            [
                1452723668000,
                268
            ],
            [
                1453069268000,
                262
            ],
            [
                1453242068000,
                439
            ],
            [
                1453587668000,
                283
            ],
            [
                1453760468000,
                345
            ],
            [
                1454106068000,
                377
            ],
            [
                1454278868000,
                394
            ],
            [
                1454624468000,
                365
            ],
            [
                1454797268000,
                392
            ],
            [
                1455142868000,
                290
            ],
            [
                1455315668000,
                361
            ],
            [
                1455661268000,
                314
            ],
            [
                1455834068000,
                316
            ],
            [
                1456179668000,
                461
            ],
            [
                1456352468000,
                442
            ],
            [
                1456698068000,
                359
            ],
            [
                1456870868000,
                321
            ],
            [
                1457216468000,
                500
            ],
            [
                1457389268000,
                436
            ],
            [
                1457734868000,
                436
            ],
            [
                1457907668000,
                383
            ],
            [
                1458253268000,
                425
            ],
            [
                1458426068000,
                485
            ],
            [
                1458771668000,
                429
            ],
            [
                1458944468000,
                444
            ],
            [
                1459290068000,
                425
            ],
            [
                1459462868000,
                424
            ],
            [
                1459808468000,
                389
            ],
            [
                1459981268000,
                414
            ],
            [
                1460326868000,
                356
            ],
            [
                1460499668000,
                530
            ],
            [
                1460845268000,
                441
            ],
            [
                1461018068000,
                372
            ],
            [
                1461363668000,
                522
            ],
            [
                1461536468000,
                472
            ]
        ]
    }, {
        key: "USD",
        values: [
            [
                1439763668000,
                209
            ],
            [
                1440109268000,
                185
            ],
            [
                1440282068000,
                150
            ],
            [
                1440627668000,
                311
            ],
            [
                1440800468000,
                311
            ],
            [
                1441146068000,
                172
            ],
            [
                1441318868000,
                199
            ],
            [
                1441664468000,
                150
            ],
            [
                1441837268000,
                209
            ],
            [
                1442182868000,
                178
            ],
            [
                1442355668000,
                307
            ],
            [
                1442701268000,
                281
            ],
            [
                1442874068000,
                209
            ],
            [
                1443219668000,
                313
            ],
            [
                1443392468000,
                220
            ],
            [
                1443738068000,
                346
            ],
            [
                1443910868000,
                193
            ],
            [
                1444256468000,
                341
            ],
            [
                1444429268000,
                321
            ],
            [
                1444774868000,
                312
            ],
            [
                1444947668000,
                270
            ],
            [
                1445293268000,
                229
            ],
            [
                1445466068000,
                214
            ],
            [
                1445811668000,
                337
            ],
            [
                1445984468000,
                316
            ],
            [
                1446330068000,
                242
            ],
            [
                1446502868000,
                333
            ],
            [
                1446848468000,
                222
            ],
            [
                1447021268000,
                276
            ],
            [
                1447366868000,
                313
            ],
            [
                1447539668000,
                350
            ],
            [
                1447885268000,
                394
            ],
            [
                1448058068000,
                200
            ],
            [
                1448403668000,
                202
            ],
            [
                1448576468000,
                401
            ],
            [
                1448922068000,
                208
            ],
            [
                1449094868000,
                266
            ],
            [
                1449440468000,
                291
            ],
            [
                1449613268000,
                243
            ],
            [
                1449958868000,
                360
            ],
            [
                1450131668000,
                348
            ],
            [
                1450477268000,
                228
            ],
            [
                1450650068000,
                314
            ],
            [
                1450995668000,
                430
            ],
            [
                1451168468000,
                409
            ],
            [
                1451514068000,
                402
            ],
            [
                1451686868000,
                437
            ],
            [
                1452032468000,
                263
            ],
            [
                1452205268000,
                398
            ],
            [
                1452550868000,
                412
            ],
            [
                1452723668000,
                424
            ],
            [
                1453069268000,
                316
            ],
            [
                1453242068000,
                284
            ],
            [
                1453587668000,
                281
            ],
            [
                1453760468000,
                289
            ],
            [
                1454106068000,
                437
            ],
            [
                1454278868000,
                354
            ],
            [
                1454624468000,
                453
            ],
            [
                1454797268000,
                284
            ],
            [
                1455142868000,
                455
            ],
            [
                1455315668000,
                385
            ],
            [
                1455661268000,
                454
            ],
            [
                1455834068000,
                461
            ],
            [
                1456179668000,
                398
            ],
            [
                1456352468000,
                463
            ],
            [
                1456698068000,
                469
            ],
            [
                1456870868000,
                408
            ],
            [
                1457216468000,
                329
            ],
            [
                1457389268000,
                354
            ],
            [
                1457734868000,
                446
            ],
            [
                1457907668000,
                479
            ],
            [
                1458253268000,
                492
            ],
            [
                1458426068000,
                458
            ],
            [
                1458771668000,
                376
            ],
            [
                1458944468000,
                498
            ],
            [
                1459290068000,
                444
            ],
            [
                1459462868000,
                349
            ],
            [
                1459808468000,
                505
            ],
            [
                1459981268000,
                472
            ],
            [
                1460326868000,
                512
            ],
            [
                1460499668000,
                476
            ],
            [
                1460845268000,
                455
            ],
            [
                1461018068000,
                380
            ],
            [
                1461363668000,
                513
            ],
            [
                1461536468000,
                483
            ]
        ]
    }, {
        key: "GBP",
        values: [
            [
                1439763668000,
                161
            ],
            [
                1440109268000,
                237
            ],
            [
                1440282068000,
                121
            ],
            [
                1440627668000,
                151
            ],
            [
                1440800468000,
                255
            ],
            [
                1441146068000,
                308
            ],
            [
                1441318868000,
                263
            ],
            [
                1441664468000,
                233
            ],
            [
                1441837268000,
                289
            ],
            [
                1442182868000,
                180
            ],
            [
                1442355668000,
                211
            ],
            [
                1442701268000,
                271
            ],
            [
                1442874068000,
                297
            ],
            [
                1443219668000,
                248
            ],
            [
                1443392468000,
                328
            ],
            [
                1443738068000,
                244
            ],
            [
                1443910868000,
                223
            ],
            [
                1444256468000,
                314
            ],
            [
                1444429268000,
                192
            ],
            [
                1444774868000,
                289
            ],
            [
                1444947668000,
                297
            ],
            [
                1445293268000,
                320
            ],
            [
                1445466068000,
                317
            ],
            [
                1445811668000,
                278
            ],
            [
                1445984468000,
                265
            ],
            [
                1446330068000,
                299
            ],
            [
                1446502868000,
                221
            ],
            [
                1446848468000,
                184
            ],
            [
                1447021268000,
                341
            ],
            [
                1447366868000,
                193
            ],
            [
                1447539668000,
                322
            ],
            [
                1447885268000,
                210
            ],
            [
                1448058068000,
                333
            ],
            [
                1448403668000,
                347
            ],
            [
                1448576468000,
                258
            ],
            [
                1448922068000,
                285
            ],
            [
                1449094868000,
                345
            ],
            [
                1449440468000,
                413
            ],
            [
                1449613268000,
                403
            ],
            [
                1449958868000,
                319
            ],
            [
                1450131668000,
                271
            ],
            [
                1450477268000,
                292
            ],
            [
                1450650068000,
                262
            ],
            [
                1450995668000,
                240
            ],
            [
                1451168468000,
                407
            ],
            [
                1451514068000,
                256
            ],
            [
                1451686868000,
                345
            ],
            [
                1452032468000,
                291
            ],
            [
                1452205268000,
                426
            ],
            [
                1452550868000,
                393
            ],
            [
                1452723668000,
                430
            ],
            [
                1453069268000,
                371
            ],
            [
                1453242068000,
                355
            ],
            [
                1453587668000,
                390
            ],
            [
                1453760468000,
                286
            ],
            [
                1454106068000,
                457
            ],
            [
                1454278868000,
                320
            ],
            [
                1454624468000,
                339
            ],
            [
                1454797268000,
                467
            ],
            [
                1455142868000,
                285
            ],
            [
                1455315668000,
                351
            ],
            [
                1455661268000,
                407
            ],
            [
                1455834068000,
                309
            ],
            [
                1456179668000,
                297
            ],
            [
                1456352468000,
                361
            ],
            [
                1456698068000,
                375
            ],
            [
                1456870868000,
                383
            ],
            [
                1457216468000,
                306
            ],
            [
                1457389268000,
                382
            ],
            [
                1457734868000,
                381
            ],
            [
                1457907668000,
                414
            ],
            [
                1458253268000,
                442
            ],
            [
                1458426068000,
                457
            ],
            [
                1458771668000,
                460
            ],
            [
                1458944468000,
                460
            ],
            [
                1459290068000,
                441
            ],
            [
                1459462868000,
                488
            ],
            [
                1459808468000,
                375
            ],
            [
                1459981268000,
                498
            ],
            [
                1460326868000,
                478
            ],
            [
                1460499668000,
                528
            ],
            [
                1460845268000,
                486
            ],
            [
                1461018068000,
                402
            ],
            [
                1461363668000,
                435
            ],
            [
                1461536468000,
                422
            ]
        ]
    }]
}

function pieChartData() {
    var config = $.localStorage.get('config');
    var colors = config.colors;
    return [{
        "label": "A",
        "value": 29,
        "color": colors.danger
    }, {
        "label": "B",
        "value": 32,
        "color": colors.info,
    }, {
        "label": "C",
        "value": 19,
        "color": colors.warning
    }, {
        "label": "D",
        "value": 50,
        "color": colors.success
    }]
}

function scatterChartData() {
    return [{
        "key": "Group 0",
        "values": [{
            "x": 0.38769080157723235,
            "y": -0.5173228958630209,
            "size": 0.2768178314436227,
            "shape": "circle"
        }, {
            "x": -0.6336301340500335,
            "y": -0.9390555631038682,
            "size": 0.04075000574812293,
            "shape": "circle"
        }, {
            "x": -0.550863171240081,
            "y": -0.7521626318030471,
            "size": 0.004082715138792992,
            "shape": "circle"
        }, {
            "x": -0.3606080283415165,
            "y": -0.5279194720801335,
            "size": 0.9785795786883682,
            "shape": "circle"
        }, {
            "x": -0.4345360918649073,
            "y": -0.15030042940391977,
            "size": 0.03700864128768444,
            "shape": "circle"
        }, {
            "x": -0.10896558486821281,
            "y": 0.1904461879981354,
            "size": 0.4344285042025149,
            "shape": "circle"
        }, {
            "x": 0.4222134313998444,
            "y": 0.7768545529468915,
            "size": 0.8932929555885494,
            "shape": "circle"
        }, {
            "x": 0.685136370467419,
            "y": -0.20876982033537692,
            "size": 0.04848805186338723,
            "shape": "circle"
        }, {
            "x": 1.887509438897577,
            "y": 0.38091582995851403,
            "size": 0.2807551396545023,
            "shape": "circle"
        }, {
            "x": -1.0066684007871052,
            "y": 0.06361657741655648,
            "size": 0.0996544121298939,
            "shape": "circle"
        }, {
            "x": 0.7577058357292228,
            "y": 0.11298201766635832,
            "size": 0.3730729282833636,
            "shape": "circle"
        }, {
            "x": -0.7260994716673589,
            "y": -1.40404891826761,
            "size": 0.39655150123871863,
            "shape": "circle"
        }, {
            "x": -0.007339860170187653,
            "y": 1.2572493869567614,
            "size": 0.30731401848606765,
            "shape": "circle"
        }, {
            "x": 0.05691246720722743,
            "y": -1.4769116517171117,
            "size": 0.832127976231277,
            "shape": "circle"
        }, {
            "x": 0.7148607307481833,
            "y": -0.11996966332922498,
            "size": 0.8596631120890379,
            "shape": "circle"
        }, {
            "x": 0.8089983174341405,
            "y": 0.2658464241458872,
            "size": 0.036332263611257076,
            "shape": "circle"
        }, {
            "x": 0.5607693908030255,
            "y": 1.0196181165260596,
            "size": 0.8023943318985403,
            "shape": "circle"
        }, {
            "x": 0.396820153950108,
            "y": 0.5078237787011678,
            "size": 0.8482829267159104,
            "shape": "circle"
        }, {
            "x": 0.19410372789370514,
            "y": 0.05954657964450648,
            "size": 0.9876099969260395,
            "shape": "circle"
        }, {
            "x": -0.2016798273573089,
            "y": 0.5239821812716101,
            "size": 0.9068739134818316,
            "shape": "circle"
        }, {
            "x": -1.7278128939213604,
            "y": -0.582998823916795,
            "size": 0.5270285934675485,
            "shape": "circle"
        }, {
            "x": 0.5183361570005616,
            "y": 0.9565433069030422,
            "size": 0.06856563361361623,
            "shape": "circle"
        }, {
            "x": 1.1325243074452427,
            "y": -0.7221938866861082,
            "size": 0.15636354964226484,
            "shape": "circle"
        }, {
            "x": 0.8905039604389422,
            "y": -0.176551323215647,
            "size": 0.36910743336193264,
            "shape": "circle"
        }, {
            "x": 0.031560573430153935,
            "y": 0.8823944862515463,
            "size": 0.4883835930377245,
            "shape": "circle"
        }, {
            "x": -0.317007706389158,
            "y": -0.6876620355660005,
            "size": 0.9182246543932706,
            "shape": "circle"
        }, {
            "x": -0.8406092564628788,
            "y": 0.1032051485536216,
            "size": 0.9300937869120389,
            "shape": "circle"
        }, {
            "x": -0.14275925303995926,
            "y": -0.10816090829583745,
            "size": 0.03907893761061132,
            "shape": "circle"
        }, {
            "x": -1.1201746418870948,
            "y": -1.791664662155709,
            "size": 0.7524311952292919,
            "shape": "circle"
        }, {
            "x": -1.2988420838943744,
            "y": 1.2518121946311973,
            "size": 0.731361635029316,
            "shape": "circle"
        }, {
            "x": 1.1568240164784722,
            "y": -1.0353719314226069,
            "size": 0.4123242860659957,
            "shape": "circle"
        }, {
            "x": -1.7205076406364987,
            "y": 0.20320988728742137,
            "size": 0.2173921351786703,
            "shape": "cross"
        }, {
            "x": 0.5942283189141998,
            "y": -0.4621959801371898,
            "size": 0.30848153424449265,
            "shape": "circle"
        }, {
            "x": 1.348239057828055,
            "y": -0.9330805057495443,
            "size": 0.7812637384049594,
            "shape": "circle"
        }, {
            "x": 0.7673717799111839,
            "y": 0.36480927718925443,
            "size": 0.36606923397630453,
            "shape": "circle"
        }, {
            "x": -0.10660930424228336,
            "y": 0.17398541876720658,
            "size": 0.3359741580206901,
            "shape": "circle"
        }, {
            "x": 0.5836399113193853,
            "y": 0.16577365556478224,
            "size": 0.7701675272546709,
            "shape": "circle"
        }, {
            "x": 1.090020623359475,
            "y": 1.0045976681699758,
            "size": 0.5053588466253132,
            "shape": "circle"
        }, {
            "x": 0.30989223406720123,
            "y": 0.059748908782469315,
            "size": 0.6628002661745995,
            "shape": "circle"
        }, {
            "x": -0.09889095603917669,
            "y": -0.2748971571365971,
            "size": 0.9497723593376577,
            "shape": "circle"
        }]
    }, {
        "key": "Group 1",
        "values": [{
            "x": 1.2666913714404744,
            "y": -0.3409172871140089,
            "size": 0.08400111668743193,
            "shape": "circle"
        }, {
            "x": -0.4038938510723015,
            "y": 0.172522355599956,
            "size": 0.39163524215109646,
            "shape": "circle"
        }, {
            "x": 0.4015214843169036,
            "y": 0.17187474319786228,
            "size": 0.4726677145808935,
            "shape": "circle"
        }, {
            "x": -1.2001972546573734,
            "y": -0.24201648085146021,
            "size": 0.9348385038319975,
            "shape": "circle"
        }, {
            "x": -1.050461097131046,
            "y": -0.6748171966573724,
            "size": 0.6366541930474341,
            "shape": "circle"
        }, {
            "x": -1.7037119572329371,
            "y": 0.1524420118537367,
            "size": 0.4882605408784002,
            "shape": "circle"
        }, {
            "x": 0.19120608954161367,
            "y": -1.9818728707135151,
            "size": 0.13686485728248954,
            "shape": "circle"
        }, {
            "x": -1.467886448610305,
            "y": 0.4406045757711914,
            "size": 0.6641095508821309,
            "shape": "circle"
        }, {
            "x": 0.2416099212957695,
            "y": -0.6547149091938965,
            "size": 0.30226255813613534,
            "shape": "circle"
        }, {
            "x": 1.2787021538770431,
            "y": -1.0696867698083268,
            "size": 0.3279375401325524,
            "shape": "circle"
        }, {
            "x": -0.3126784643485131,
            "y": 0.25145544887916504,
            "size": 0.5804495792835951,
            "shape": "circle"
        }, {
            "x": 1.4052395077685682,
            "y": 0.3267670215661804,
            "size": 0.8793672590982169,
            "shape": "circle"
        }, {
            "x": 2.208306922988852,
            "y": -0.4939446025831234,
            "size": 0.3236342000309378,
            "shape": "circle"
        }, {
            "x": -1.4734054902455154,
            "y": 1.2398498036411985,
            "size": 0.7104428187012672,
            "shape": "circle"
        }, {
            "x": -0.6756514502346047,
            "y": 1.0741950078194127,
            "size": 0.9895698581822217,
            "shape": "circle"
        }, {
            "x": 0.7654663171223067,
            "y": -0.6223493580602973,
            "size": 0.47638911474496126,
            "shape": "circle"
        }, {
            "x": 0.8465462952859193,
            "y": -1.4607934535456526,
            "size": 0.9049772636499256,
            "shape": "circle"
        }, {
            "x": 1.0259111800405973,
            "y": 0.7241549554580273,
            "size": 0.21679403260350227,
            "shape": "circle"
        }, {
            "x": -1.1225531776174653,
            "y": -1.1511258790448042,
            "size": 0.4554666655603796,
            "shape": "circle"
        }, {
            "x": 0.2579309096031326,
            "y": -1.2379239563745723,
            "size": 0.4097367699723691,
            "shape": "circle"
        }, {
            "x": -0.4192817434324062,
            "y": 0.3520235358155817,
            "size": 0.9509387270081788,
            "shape": "circle"
        }, {
            "x": 0.2839428105357374,
            "y": 0.4904836882571715,
            "size": 0.7945694348309189,
            "shape": "circle"
        }, {
            "x": -0.4673164607124432,
            "y": 1.2817204781634468,
            "size": 0.002588374074548483,
            "shape": "circle"
        }, {
            "x": 0.5572297647679315,
            "y": 0.5267008108137803,
            "size": 0.37665788596495986,
            "shape": "circle"
        }, {
            "x": -0.5379029677818955,
            "y": -0.052202521237851414,
            "size": 0.14584358199499547,
            "shape": "circle"
        }, {
            "x": 0.8054472713220879,
            "y": 0.21277353821206382,
            "size": 0.413029016694054,
            "shape": "circle"
        }, {
            "x": -1.0402395589796412,
            "y": 0.5927864356586248,
            "size": 0.17591882962733507,
            "shape": "circle"
        }, {
            "x": 0.14438040314111156,
            "y": 0.8346317071444741,
            "size": 0.6190513039473444,
            "shape": "circle"
        }, {
            "x": 0.4294218697312737,
            "y": -0.43713985445609477,
            "size": 0.31525261211209,
            "shape": "circle"
        }, {
            "x": -0.4673145819497998,
            "y": -0.5707102677133966,
            "size": 0.1157393844332546,
            "shape": "circle"
        }, {
            "x": 1.1784100753507558,
            "y": -0.8282407880508773,
            "size": 0.7580934173893183,
            "shape": "circle"
        }, {
            "x": 0.052600065816817775,
            "y": 1.4096927618626909,
            "size": 0.6742644750047475,
            "shape": "circle"
        }, {
            "x": -1.3289599213990966,
            "y": 0.26188475082077844,
            "size": 0.2661776039749384,
            "shape": "circle"
        }, {
            "x": 0.6582680186976101,
            "y": -1.5703968701906,
            "size": 0.2984335720539093,
            "shape": "circle"
        }, {
            "x": -0.9968277997195788,
            "y": 0.20259835735252432,
            "size": 0.17411843966692686,
            "shape": "circle"
        }, {
            "x": -0.41693364365768937,
            "y": 0.3292480066942277,
            "size": 0.30931322812102735,
            "shape": "circle"
        }, {
            "x": 0.06649154952932934,
            "y": 0.1700917218509851,
            "size": 0.24687890172936022,
            "shape": "circle"
        }, {
            "x": 0.4534036930604502,
            "y": -0.6389351197375787,
            "size": 0.7983592841774225,
            "shape": "circle"
        }, {
            "x": 0.7121582692776623,
            "y": 0.013849190267504462,
            "size": 0.9162284294143319,
            "shape": "circle"
        }, {
            "x": -1.0704514659518682,
            "y": -1.036718481780305,
            "size": 0.1811193695757538,
            "shape": "circle"
        }]
    }, {
        "key": "Group 2",
        "values": [{
            "x": -1.6920181739580942,
            "y": -0.5099370989453762,
            "size": 0.9780207313597202,
            "shape": "circle"
        }, {
            "x": 1.6805976686377857,
            "y": -0.416543786502356,
            "size": 0.8893015715293586,
            "shape": "circle"
        }, {
            "x": -0.5578813371754292,
            "y": -0.3437232226599006,
            "size": 0.6945983830373734,
            "shape": "triangle-up"
        }, {
            "x": 1.597919173003942,
            "y": -0.8650109977077942,
            "size": 0.08738353196531534,
            "shape": "circle"
        }, {
            "x": 1.1118150742208288,
            "y": -0.9611502223063982,
            "size": 0.809301407309249,
            "shape": "circle"
        }, {
            "x": -0.2335455546046462,
            "y": 1.3187311454412156,
            "size": 0.5260935658589005,
            "shape": "circle"
        }, {
            "x": 0.35161729472934217,
            "y": -0.530380491302575,
            "size": 0.8902570870704949,
            "shape": "circle"
        }, {
            "x": -0.6282808643486352,
            "y": 0.6113878764555555,
            "size": 0.3025648118928075,
            "shape": "circle"
        }, {
            "x": -0.3628612585300072,
            "y": 0.4417979400342926,
            "size": 0.8095609368756413,
            "shape": "circle"
        }, {
            "x": 2.7334945576939895,
            "y": -1.6033149191185905,
            "size": 0.5925705705303699,
            "shape": "circle"
        }, {
            "x": 0.3443997855110488,
            "y": -0.1431030485630505,
            "size": 0.6078358753584325,
            "shape": "circle"
        }, {
            "x": 0.22651518176605415,
            "y": 0.7787704975409947,
            "size": 0.8637564079836011,
            "shape": "circle"
        }, {
            "x": -1.3569523560967167,
            "y": -1.4176015277295806,
            "size": 0.7185975268948823,
            "shape": "circle"
        }, {
            "x": -1.282915022650199,
            "y": -0.6353542238779468,
            "size": 0.13667975342832506,
            "shape": "circle"
        }, {
            "x": 0.05851670495179126,
            "y": 1.5979214157622215,
            "size": 0.2674029660411179,
            "shape": "circle"
        }, {
            "x": 0.13086872449554762,
            "y": 0.7039289158967081,
            "size": 0.5960335519630462,
            "shape": "circle"
        }, {
            "x": 0.02626799505647806,
            "y": -1.6564529619848305,
            "size": 0.8820966682396829,
            "shape": "diamond"
        }, {
            "x": 0.7242057564845202,
            "y": 0.2259126930340935,
            "size": 0.873784416122362,
            "shape": "square"
        }, {
            "x": -0.9000194350868126,
            "y": -0.1278386068760639,
            "size": 0.5085777489002794,
            "shape": "circle"
        }, {
            "x": 1.2227794523726758,
            "y": -0.14431090727728443,
            "size": 0.3153586545959115,
            "shape": "circle"
        }, {
            "x": -0.8646677070883201,
            "y": -2.060727862852881,
            "size": 0.8724922249093652,
            "shape": "circle"
        }, {
            "x": 0.2166478428383571,
            "y": -0.6192742432553767,
            "size": 0.2209502304904163,
            "shape": "circle"
        }, {
            "x": 0.448081939909664,
            "y": -0.9280048317647395,
            "size": 0.4864790220744908,
            "shape": "circle"
        }, {
            "x": -1.4405496787286132,
            "y": 0.019691211544378567,
            "size": 0.7325624050572515,
            "shape": "circle"
        }, {
            "x": 0.8157793940745497,
            "y": -0.3697428756199661,
            "size": 0.39556885580532253,
            "shape": "circle"
        }, {
            "x": 3.2396143048721373,
            "y": -1.1917544421232187,
            "size": 0.18084654957056046,
            "shape": "circle"
        }, {
            "x": 0.34272850240275843,
            "y": -1.5447216946903013,
            "size": 0.47581319231539965,
            "shape": "circle"
        }, {
            "x": 0.8891949987105163,
            "y": 1.0032300003301855,
            "size": 0.03774643316864967,
            "shape": "circle"
        }, {
            "x": 0.6422292256262551,
            "y": 0.9492005768197156,
            "size": 0.04471684596501291,
            "shape": "circle"
        }, {
            "x": -0.8221639780633349,
            "y": 0.23652662262421587,
            "size": 0.5588007338810712,
            "shape": "circle"
        }, {
            "x": -0.19383883642391975,
            "y": -0.8722702516272653,
            "size": 0.2051193853840232,
            "shape": "circle"
        }, {
            "x": 1.1046460586740494,
            "y": -0.5424532959184373,
            "size": 0.0564570426940918,
            "shape": "circle"
        }, {
            "x": 0.3924695045907561,
            "y": 0.01910590427729618,
            "size": 0.45132099534384906,
            "shape": "circle"
        }, {
            "x": 0.1048348828456688,
            "y": -2.3741194307102873,
            "size": 0.8785002809017897,
            "shape": "circle"
        }, {
            "x": -1.0543158991334756,
            "y": 0.11659895992605132,
            "size": 0.5602925708517432,
            "shape": "circle"
        }, {
            "x": -0.1606554097623388,
            "y": 0.03816194494267741,
            "size": 0.15812311368063092,
            "shape": "circle"
        }, {
            "x": 1.4921761053139242,
            "y": -1.0240437257077757,
            "size": 0.8115659335162491,
            "shape": "circle"
        }, {
            "x": 0.8533601532531616,
            "y": -0.3042198544601767,
            "size": 0.6029800453688949,
            "shape": "circle"
        }, {
            "x": 0.7835472990045039,
            "y": 0.7518527108208498,
            "size": 0.232027237303555,
            "shape": "circle"
        }, {
            "x": 0.6752817857640234,
            "y": -0.602374915631576,
            "size": 0.9052182061132044,
            "shape": "circle"
        }]
    }, {
        "key": "Group 3",
        "values": [{
            "x": -1.0886030278641268,
            "y": -0.9283415714888283,
            "size": 0.40619017160497606,
            "shape": "circle"
        }, {
            "x": -1.282846593217239,
            "y": 1.973957129611161,
            "size": 0.6913056299090385,
            "shape": "circle"
        }, {
            "x": -0.16983471426943267,
            "y": 0.6771922219746219,
            "size": 0.94813770824112,
            "shape": "circle"
        }, {
            "x": -0.30235144904392375,
            "y": -1.586356017350348,
            "size": 0.9761592720169574,
            "shape": "circle"
        }, {
            "x": 0.9089157630930265,
            "y": -0.6881903911058643,
            "size": 0.5134737030602992,
            "shape": "circle"
        }, {
            "x": 0.34482100876887584,
            "y": 0.13615715881819865,
            "size": 0.28445545490831137,
            "shape": "circle"
        }, {
            "x": 1.7365134106736304,
            "y": -0.03679825456342509,
            "size": 0.7459651054814458,
            "shape": "circle"
        }, {
            "x": -0.4382175357134823,
            "y": 0.6244342669760368,
            "size": 0.9744091909378767,
            "shape": "circle"
        }, {
            "x": 0.3108216697745549,
            "y": -0.043516657756506115,
            "size": 0.8451576584484428,
            "shape": "circle"
        }, {
            "x": 1.0276557408761067,
            "y": -0.893425369233577,
            "size": 0.8957285194192082,
            "shape": "circle"
        }, {
            "x": -1.24575855756156,
            "y": 1.4579881162587989,
            "size": 0.15016216435469687,
            "shape": "circle"
        }, {
            "x": -1.3065759357770617,
            "y": -0.1859912541355555,
            "size": 0.3875925459433347,
            "shape": "circle"
        }, {
            "x": -1.4009813775954227,
            "y": -0.44795377098265904,
            "size": 0.47788906819187105,
            "shape": "circle"
        }, {
            "x": 0.6390810052317042,
            "y": 0.20636384787567466,
            "size": 0.6032983053009957,
            "shape": "circle"
        }, {
            "x": 0.2981527265068764,
            "y": 0.46371511061590576,
            "size": 0.08694475330412388,
            "shape": "circle"
        }, {
            "x": -0.39222818329494247,
            "y": -0.8017526397110603,
            "size": 0.28758640540763736,
            "shape": "circle"
        }, {
            "x": -0.721622344430882,
            "y": -0.5723674894228309,
            "size": 0.6716808783821762,
            "shape": "circle"
        }, {
            "x": 1.197824933026615,
            "y": -0.9420971120497877,
            "size": 0.8298159439582378,
            "shape": "circle"
        }, {
            "x": 0.5831068799865688,
            "y": -0.11143747861204835,
            "size": 0.051199101842939854,
            "shape": "circle"
        }, {
            "x": 0.23060571062229954,
            "y": 1.188670325963626,
            "size": 0.8328356698621064,
            "shape": "circle"
        }, {
            "x": 0.8693478401973773,
            "y": 1.728738056959118,
            "size": 0.9077592128887773,
            "shape": "circle"
        }, {
            "x": 0.056244167159448785,
            "y": 0.2738800385299293,
            "size": 0.537831716472283,
            "shape": "circle"
        }, {
            "x": -0.7886062829772624,
            "y": -0.8328242211955511,
            "size": 0.6665785131044686,
            "shape": "circle"
        }, {
            "x": -0.35836821980655786,
            "y": 1.2032989645645316,
            "size": 0.41023733792826533,
            "shape": "circle"
        }, {
            "x": -1.7991442443917396,
            "y": 0.08233202379485506,
            "size": 0.13021763367578387,
            "shape": "circle"
        }, {
            "x": 1.022864207315788,
            "y": -0.12908692858237947,
            "size": 0.4737019659951329,
            "shape": "circle"
        }, {
            "x": 1.3104536996624219,
            "y": -0.23303278217201195,
            "size": 0.26832140097394586,
            "shape": "circle"
        }, {
            "x": -2.1271594827087554,
            "y": 0.04369486558935699,
            "size": 0.36951559665612876,
            "shape": "triangle-down"
        }, {
            "x": 0.9506376744123605,
            "y": -1.6743715097262573,
            "size": 0.9571489484515041,
            "shape": "circle"
        }, {
            "x": 0.6840310412767745,
            "y": 1.487027838400755,
            "size": 0.48132562218233943,
            "shape": "circle"
        }, {
            "x": -0.24687304473210786,
            "y": 0.8770825119677541,
            "size": 0.10397675144486129,
            "shape": "circle"
        }, {
            "x": 0.553593743147885,
            "y": -0.529142621211096,
            "size": 0.7939152482431382,
            "shape": "circle"
        }, {
            "x": 0.9592073525106544,
            "y": 0.7561477334371587,
            "size": 0.7673417741898447,
            "shape": "circle"
        }, {
            "x": -1.0282008624611918,
            "y": 0.9368853323639286,
            "size": 0.820484465919435,
            "shape": "triangle-down"
        }, {
            "x": -0.4453478993091266,
            "y": 1.432306120394985,
            "size": 0.7240851724054664,
            "shape": "circle"
        }, {
            "x": -2.51572935040214,
            "y": -0.49281275409005376,
            "size": 0.027318251319229603,
            "shape": "circle"
        }, {
            "x": 0.23288386434800967,
            "y": -0.6321148295708396,
            "size": 0.860072634415701,
            "shape": "circle"
        }, {
            "x": 0.523994926047005,
            "y": 0.2907870095136031,
            "size": 0.008669282542541623,
            "shape": "circle"
        }, {
            "x": -0.1430947009142679,
            "y": 0.976462066406769,
            "size": 0.7862239074893296,
            "shape": "circle"
        }, {
            "x": -0.41473603014191346,
            "y": 0.18173622530889325,
            "size": 0.6720831249840558,
            "shape": "circle"
        }]
    }];
}

function sinAndCos() {
    return [{
        "values": [{
            "x": 0,
            "y": 0
        }, {
            "x": 1,
            "y": 0.09983341664682815
        }, {
            "x": 2,
            "y": 0.19866933079506122
        }, {
            "x": 3,
            "y": 0.29552020666133955
        }, {
            "x": 4,
            "y": 0.3894183423086505
        }, {
            "x": 5,
            "y": 0.479425538604203
        }, {
            "x": 6,
            "y": 0.5646424733950354
        }, {
            "x": 7,
            "y": 0.644217687237691
        }, {
            "x": 8,
            "y": 0.7173560908995229
        }, {
            "x": 9,
            "y": 0.7833269096274834
        }, {
            "x": 10,
            "y": 0.8414709848078965
        }, {
            "x": 11,
            "y": 0.8912073600614354
        }, {
            "x": 12,
            "y": 0.9320390859672263
        }, {
            "x": 13,
            "y": 0.963558185417193
        }, {
            "x": 14,
            "y": 0.9854497299884601
        }, {
            "x": 15,
            "y": 0.9974949866040544
        }, {
            "x": 16,
            "y": 0.9995736030415051
        }, {
            "x": 17,
            "y": 0.9916648104524686
        }, {
            "x": 18,
            "y": 0.9738476308781951
        }, {
            "x": 19,
            "y": 0.9463000876874145
        }, {
            "x": 20,
            "y": 0.9092974268256817
        }, {
            "x": 21,
            "y": 0.8632093666488737
        }, {
            "x": 22,
            "y": 0.8084964038195901
        }, {
            "x": 23,
            "y": 0.7457052121767203
        }, {
            "x": 24,
            "y": 0.675463180551151
        }, {
            "x": 25,
            "y": 0.5984721441039564
        }, {
            "x": 26,
            "y": 0.5155013718214642
        }, {
            "x": 27,
            "y": 0.4273798802338298
        }, {
            "x": 28,
            "y": 0.3349881501559051
        }, {
            "x": 29,
            "y": 0.23924932921398243
        }, {
            "x": 30,
            "y": 0.1411200080598672
        }, {
            "x": 31,
            "y": 0.04158066243329049
        }, {
            "x": 32,
            "y": -0.058374143427580086
        }, {
            "x": 33,
            "y": -0.1577456941432482
        }, {
            "x": 34,
            "y": -0.2555411020268312
        }, {
            "x": 35,
            "y": -0.35078322768961984
        }, {
            "x": 36,
            "y": -0.44252044329485246
        }, {
            "x": 37,
            "y": -0.5298361409084934
        }, {
            "x": 38,
            "y": -0.6118578909427189
        }, {
            "x": 39,
            "y": -0.6877661591839738
        }, {
            "x": 40,
            "y": -0.7568024953079282
        }, {
            "x": 41,
            "y": -0.8182771110644103
        }, {
            "x": 42,
            "y": -0.8715757724135882
        }, {
            "x": 43,
            "y": -0.9161659367494549
        }, {
            "x": 44,
            "y": -0.9516020738895161
        }, {
            "x": 45,
            "y": -0.977530117665097
        }, {
            "x": 46,
            "y": -0.9936910036334644
        }, {
            "x": 47,
            "y": -0.9999232575641008
        }, {
            "x": 48,
            "y": -0.9961646088358407
        }, {
            "x": 49,
            "y": -0.9824526126243325
        }, {
            "x": 50,
            "y": -0.9589242746631385
        }, {
            "x": 51,
            "y": -0.9258146823277325
        }, {
            "x": 52,
            "y": -0.8834546557201531
        }, {
            "x": 53,
            "y": -0.8322674422239013
        }, {
            "x": 54,
            "y": -0.7727644875559871
        }, {
            "x": 55,
            "y": -0.7055403255703919
        }, {
            "x": 56,
            "y": -0.6312666378723216
        }, {
            "x": 57,
            "y": -0.5506855425976376
        }, {
            "x": 58,
            "y": -0.46460217941375737
        }, {
            "x": 59,
            "y": -0.373876664830236
        }, {
            "x": 60,
            "y": -0.27941549819892586
        }, {
            "x": 61,
            "y": -0.18216250427209588
        }, {
            "x": 62,
            "y": -0.0830894028174964
        }, {
            "x": 63,
            "y": 0.016813900484349713
        }, {
            "x": 64,
            "y": 0.11654920485049364
        }, {
            "x": 65,
            "y": 0.21511998808781552
        }, {
            "x": 66,
            "y": 0.31154136351337786
        }, {
            "x": 67,
            "y": 0.4048499206165983
        }, {
            "x": 68,
            "y": 0.49411335113860816
        }, {
            "x": 69,
            "y": 0.5784397643882002
        }, {
            "x": 70,
            "y": 0.6569865987187891
        }, {
            "x": 71,
            "y": 0.7289690401258759
        }, {
            "x": 72,
            "y": 0.7936678638491532
        }, {
            "x": 73,
            "y": 0.8504366206285645
        }, {
            "x": 74,
            "y": 0.8987080958116269
        }, {
            "x": 75,
            "y": 0.9379999767747389
        }, {
            "x": 76,
            "y": 0.9679196720314863
        }, {
            "x": 77,
            "y": 0.9881682338770004
        }, {
            "x": 78,
            "y": 0.998543345374605
        }, {
            "x": 79,
            "y": 0.998941341839772
        }, {
            "x": 80,
            "y": 0.9893582466233818
        }, {
            "x": 81,
            "y": 0.9698898108450863
        }, {
            "x": 82,
            "y": 0.9407305566797731
        }, {
            "x": 83,
            "y": 0.9021718337562934
        }, {
            "x": 84,
            "y": 0.8545989080882805
        }, {
            "x": 85,
            "y": 0.7984871126234903
        }, {
            "x": 86,
            "y": 0.7343970978741134
        }, {
            "x": 87,
            "y": 0.6629692300821833
        }, {
            "x": 88,
            "y": 0.5849171928917617
        }, {
            "x": 89,
            "y": 0.5010208564578846
        }, {
            "x": 90,
            "y": 0.4121184852417566
        }, {
            "x": 91,
            "y": 0.3190983623493521
        }, {
            "x": 92,
            "y": 0.22288991410024764
        }, {
            "x": 93,
            "y": 0.1244544235070617
        }, {
            "x": 94,
            "y": 0.024775425453357765
        }, {
            "x": 95,
            "y": -0.0751511204618093
        }, {
            "x": 96,
            "y": -0.17432678122297965
        }, {
            "x": 97,
            "y": -0.27176062641094245
        }, {
            "x": 98,
            "y": -0.3664791292519284
        }, {
            "x": 99,
            "y": -0.4575358937753214
        }],
        "key": "Sine Wave",
        "color": "#c0392b"
    }, {
        "values": [{
            "x": 0,
            "y": 0.5
        }, {
            "x": 1,
            "y": 0.49750208263901285
        }, {
            "x": 2,
            "y": 0.4900332889206208
        }, {
            "x": 3,
            "y": 0.477668244562803
        }, {
            "x": 4,
            "y": 0.46053049700144255
        }, {
            "x": 5,
            "y": 0.4387912809451864
        }, {
            "x": 6,
            "y": 0.41266780745483916
        }, {
            "x": 7,
            "y": 0.38242109364224425
        }, {
            "x": 8,
            "y": 0.3483533546735827
        }, {
            "x": 9,
            "y": 0.3108049841353322
        }, {
            "x": 10,
            "y": 0.2701511529340699
        }, {
            "x": 11,
            "y": 0.22679806071278866
        }, {
            "x": 12,
            "y": 0.1811788772383368
        }, {
            "x": 13,
            "y": 0.13374941431229367
        }, {
            "x": 14,
            "y": 0.08498357145012052
        }, {
            "x": 15,
            "y": 0.03536860083385145
        }, {
            "x": 16,
            "y": -0.014599761150644408
        }, {
            "x": 17,
            "y": -0.06442224714776232
        }, {
            "x": 18,
            "y": -0.11360104734654355
        }, {
            "x": 19,
            "y": -0.16164478343175168
        }, {
            "x": 20,
            "y": -0.2080734182735712
        }, {
            "x": 21,
            "y": -0.2524230522999288
        }, {
            "x": 22,
            "y": -0.2942505586276729
        }, {
            "x": 23,
            "y": -0.333138010639912
        }, {
            "x": 24,
            "y": -0.3686968577706227
        }, {
            "x": 25,
            "y": -0.40057180777346685
        }, {
            "x": 26,
            "y": -0.42844437668447366
        }, {
            "x": 27,
            "y": -0.4520360710085306
        }, {
            "x": 28,
            "y": -0.47111117033432903
        }, {
            "x": 29,
            "y": -0.4854790825747953
        }, {
            "x": 30,
            "y": -0.4949962483002227
        }, {
            "x": 31,
            "y": -0.49956757513663974
        }, {
            "x": 32,
            "y": -0.49914738789737656
        }, {
            "x": 33,
            "y": -0.49373988495443244
        }, {
            "x": 34,
            "y": -0.48339909628973055
        }, {
            "x": 35,
            "y": -0.46822834364539817
        }, {
            "x": 36,
            "y": -0.4483792081670735
        }, {
            "x": 37,
            "y": -0.424050015855204
        }, {
            "x": 38,
            "y": -0.3954838559572084
        }, {
            "x": 39,
            "y": -0.3629661521000701
        }, {
            "x": 40,
            "y": -0.32682181043180597
        }, {
            "x": 41,
            "y": -0.2874119732666346
        }, {
            "x": 42,
            "y": -0.2451304106703497
        }, {
            "x": 43,
            "y": -0.20039958603998773
        }, {
            "x": 44,
            "y": -0.15366643498920968
        }, {
            "x": 45,
            "y": -0.10539789971538985
        }, {
            "x": 46,
            "y": -0.056076263467527435
        }, {
            "x": 47,
            "y": -0.00619433173144528
        }, {
            "x": 48,
            "y": 0.0437494917197232
        }, {
            "x": 49,
            "y": 0.09325618471128788
        }, {
            "x": 50,
            "y": 0.14183109273161312
        }, {
            "x": 51,
            "y": 0.18898887135649012
        }, {
            "x": 52,
            "y": 0.23425833565018855
        }, {
            "x": 53,
            "y": 0.2771871680895804
        }, {
            "x": 54,
            "y": 0.31734643797131734
        }, {
            "x": 55,
            "y": 0.35433488714563
        }, {
            "x": 56,
            "y": 0.38778293925512475
        }, {
            "x": 57,
            "y": 0.4173563924195799
        }, {
            "x": 58,
            "y": 0.44275975847065946
        }, {
            "x": 59,
            "y": 0.46373921537201795
        }, {
            "x": 60,
            "y": 0.48008514332518304
        }, {
            "x": 61,
            "y": 0.49163421922129225
        }, {
            "x": 62,
            "y": 0.49827104851160875
        }, {
            "x": 63,
            "y": 0.49992931819170755
        }, {
            "x": 64,
            "y": 0.4965924593790963
        }, {
            "x": 65,
            "y": 0.48829381286401174
        }, {
            "x": 66,
            "y": 0.4751162959792648
        }, {
            "x": 67,
            "y": 0.4571915741176597
        }, {
            "x": 68,
            "y": 0.43469874517491264
        }, {
            "x": 69,
            "y": 0.4078625500626784
        }, {
            "x": 70,
            "y": 0.3769511271716523
        }, {
            "x": 71,
            "y": 0.3422733332214033
        }, {
            "x": 72,
            "y": 0.3041756572661273
        }, {
            "x": 73,
            "y": 0.26303875869055265
        }, {
            "x": 74,
            "y": 0.21927366378719518
        }, {
            "x": 75,
            "y": 0.1733176589175129
        }, {
            "x": 76,
            "y": 0.12562992129112785
        }, {
            "x": 77,
            "y": 0.07668693101893218
        }, {
            "x": 78,
            "y": 0.026977710281324875
        }, {
            "x": 79,
            "y": -0.023001062819768475
        }, {
            "x": 80,
            "y": -0.07275001690430677
        }, {
            "x": 81,
            "y": -0.12177207686789555
        }, {
            "x": 82,
            "y": -0.16957743049191726
        }, {
            "x": 83,
            "y": -0.21568842248531042
        }, {
            "x": 84,
            "y": -0.2596443270583428
        }, {
            "x": 85,
            "y": -0.3010059513424118
        }, {
            "x": 86,
            "y": -0.3393600236600062
        }, {
            "x": 87,
            "y": -0.37432332279869934
        }, {
            "x": 88,
            "y": -0.405546507030828
        }, {
            "x": 89,
            "y": -0.43271760462055614
        }, {
            "x": 90,
            "y": -0.4555651309423385
        }, {
            "x": 91,
            "y": -0.47386080106555595
        }, {
            "x": 92,
            "y": -0.4874218107020818
        }, {
            "x": 93,
            "y": -0.4961126627263017
        }, {
            "x": 94,
            "y": -0.49984652101760324
        }, {
            "x": 95,
            "y": -0.4985860780981892
        }, {
            "x": 96,
            "y": -0.4923439278970635
        }, {
            "x": 97,
            "y": -0.4811824399156551
        }, {
            "x": 98,
            "y": -0.46521313605237663
        }, {
            "x": 99,
            "y": -0.44459557631268043
        }],
        "key": "Cosine Wave",
        "color": "#27ae60"
    }, {
        "values": [{
            "x": 0,
            "y": 0.5
        }, {
            "x": 1,
            "y": 0.524958354161707
        }, {
            "x": 2,
            "y": 0.5496673326987653
        }, {
            "x": 3,
            "y": 0.5738800516653348
        }, {
            "x": 4,
            "y": 0.5973545855771626
        }, {
            "x": 5,
            "y": 0.6198563846510508
        }, {
            "x": 6,
            "y": 0.6411606183487588
        }, {
            "x": 7,
            "y": 0.6610544218094228
        }, {
            "x": 8,
            "y": 0.6793390227248808
        }, {
            "x": 9,
            "y": 0.6958317274068708
        }, {
            "x": 10,
            "y": 0.7103677462019742
        }, {
            "x": 11,
            "y": 0.7228018400153589
        }, {
            "x": 12,
            "y": 0.7330097714918066
        }, {
            "x": 13,
            "y": 0.7408895463542983
        }, {
            "x": 14,
            "y": 0.746362432497115
        }, {
            "x": 15,
            "y": 0.7493737466510136
        }, {
            "x": 16,
            "y": 0.7498934007603762
        }, {
            "x": 17,
            "y": 0.7479162026131172
        }, {
            "x": 18,
            "y": 0.7434619077195488
        }, {
            "x": 19,
            "y": 0.7365750219218536
        }, {
            "x": 20,
            "y": 0.7273243567064205
        }, {
            "x": 21,
            "y": 0.7158023416622185
        }, {
            "x": 22,
            "y": 0.7021241009548975
        }, {
            "x": 23,
            "y": 0.6864263030441801
        }, {
            "x": 24,
            "y": 0.6688657951377878
        }, {
            "x": 25,
            "y": 0.6496180360259891
        }, {
            "x": 26,
            "y": 0.6288753429553661
        }, {
            "x": 27,
            "y": 0.6068449700584575
        }, {
            "x": 28,
            "y": 0.5837470375389763
        }, {
            "x": 29,
            "y": 0.5598123323034956
        }, {
            "x": 30,
            "y": 0.5352800020149668
        }, {
            "x": 31,
            "y": 0.5103951656083227
        }, {
            "x": 32,
            "y": 0.48540646414310495
        }, {
            "x": 33,
            "y": 0.46056357646418794
        }, {
            "x": 34,
            "y": 0.4361147244932922
        }, {
            "x": 35,
            "y": 0.412304193077595
        }, {
            "x": 36,
            "y": 0.3893698891762869
        }, {
            "x": 37,
            "y": 0.3675409647728767
        }, {
            "x": 38,
            "y": 0.3470355272643203
        }, {
            "x": 39,
            "y": 0.32805846020400653
        }, {
            "x": 40,
            "y": 0.31079937617301795
        }, {
            "x": 41,
            "y": 0.29543072223389744
        }, {
            "x": 42,
            "y": 0.28210605689660295
        }, {
            "x": 43,
            "y": 0.2709585158126363
        }, {
            "x": 44,
            "y": 0.26209948152762097
        }, {
            "x": 45,
            "y": 0.25561747058372575
        }, {
            "x": 46,
            "y": 0.2515772490916339
        }, {
            "x": 47,
            "y": 0.2500191856089748
        }, {
            "x": 48,
            "y": 0.25095884779103983
        }, {
            "x": 49,
            "y": 0.2543868468439169
        }, {
            "x": 50,
            "y": 0.26026893133421536
        }, {
            "x": 51,
            "y": 0.2685463294180669
        }, {
            "x": 52,
            "y": 0.2791363360699617
        }, {
            "x": 53,
            "y": 0.29193313944402466
        }, {
            "x": 54,
            "y": 0.3068088781110032
        }, {
            "x": 55,
            "y": 0.323614918607402
        }, {
            "x": 56,
            "y": 0.34218334053191957
        }, {
            "x": 57,
            "y": 0.3623286143505906
        }, {
            "x": 58,
            "y": 0.38384945514656066
        }, {
            "x": 59,
            "y": 0.406530833792441
        }, {
            "x": 60,
            "y": 0.43014612545026853
        }, {
            "x": 61,
            "y": 0.45445937393197605
        }, {
            "x": 62,
            "y": 0.4792276492956259
        }, {
            "x": 63,
            "y": 0.5042034751210874
        }, {
            "x": 64,
            "y": 0.5291373012126234
        }, {
            "x": 65,
            "y": 0.5537799970219539
        }, {
            "x": 66,
            "y": 0.5778853408783444
        }, {
            "x": 67,
            "y": 0.6012124801541496
        }, {
            "x": 68,
            "y": 0.623528337784652
        }, {
            "x": 69,
            "y": 0.64460994109705
        }, {
            "x": 70,
            "y": 0.6642466496796973
        }, {
            "x": 71,
            "y": 0.682242260031469
        }, {
            "x": 72,
            "y": 0.6984169659622883
        }, {
            "x": 73,
            "y": 0.7126091551571412
        }, {
            "x": 74,
            "y": 0.7246770239529068
        }, {
            "x": 75,
            "y": 0.7344999941936847
        }, {
            "x": 76,
            "y": 0.7419799180078716
        }, {
            "x": 77,
            "y": 0.7470420584692501
        }, {
            "x": 78,
            "y": 0.7496358363436513
        }, {
            "x": 79,
            "y": 0.749735335459943
        }, {
            "x": 80,
            "y": 0.7473395616558455
        }, {
            "x": 81,
            "y": 0.7424724527112716
        }, {
            "x": 82,
            "y": 0.7351826391699433
        }, {
            "x": 83,
            "y": 0.7255429584390733
        }, {
            "x": 84,
            "y": 0.7136497270220701
        }, {
            "x": 85,
            "y": 0.6996217781558726
        }, {
            "x": 86,
            "y": 0.6835992744685284
        }, {
            "x": 87,
            "y": 0.6657423075205459
        }, {
            "x": 88,
            "y": 0.6462292982229404
        }, {
            "x": 89,
            "y": 0.6252552141144712
        }, {
            "x": 90,
            "y": 0.6030296213104391
        }, {
            "x": 91,
            "y": 0.579774590587338
        }, {
            "x": 92,
            "y": 0.555722478525062
        }, {
            "x": 93,
            "y": 0.5311136058767654
        }, {
            "x": 94,
            "y": 0.5061938563633395
        }, {
            "x": 95,
            "y": 0.48121221988454765
        }, {
            "x": 96,
            "y": 0.4564183046942551
        }, {
            "x": 97,
            "y": 0.4320598433972644
        }, {
            "x": 98,
            "y": 0.40838021768701793
        }, {
            "x": 99,
            "y": 0.38561602655616967
        }],
        "key": "Another sine wave",
        "color": "#e67e22",
        "area": true
    }]
}

function multiBarHorizontalChartData() {
    var config = $.localStorage.get('config');
    var colors = config.colors;
    return [{
        "key": "Series 1",
        "color": colors.danger,
        "values": [{
            "label": "Group A",
            "value": -1.8746444827653
        }, {
            "label": "Group B",
            "value": -8.0961543492239
        }, {
            "label": "Group C",
            "value": -0.57072943117674
        }, {
            "label": "Group D",
            "value": -2.4174010336624
        }, {
            "label": "Group E",
            "value": -0.72009071426284
        }, {
            "label": "Group F",
            "value": -0.77154485523777
        }, {
            "label": "Group G",
            "value": -0.90152097798131
        }, {
            "label": "Group H",
            "value": -0.91445417330854
        }, {
            "label": "Group I",
            "value": -0.055746319141851
        }]
    }, {
        "key": "Series 2",
        "color": colors.success,
        "values": [{
            "label": "Group A",
            "value": 25.307646510375
        }, {
            "label": "Group B",
            "value": 16.756779544553
        }, {
            "label": "Group C",
            "value": 18.451534877007
        }, {
            "label": "Group D",
            "value": 8.6142352811805
        }, {
            "label": "Group E",
            "value": 7.8082472075876
        }, {
            "label": "Group F",
            "value": 5.259101026956
        }, {
            "label": "Group G",
            "value": 0.30947953487127
        }, {
            "label": "Group H",
            "value": 0
        }, {
            "label": "Group I",
            "value": 0
        }]
    }]
}

function discreteBarChartData() {
    return [{
        "key": "Cumulative Return",
        "values": [{
            "label": "A Label",
            "value": -29.765957771107
        }, {
            "label": "B Label",
            "value": 0
        }, {
            "label": "C Label",
            "value": 32.807804682612
        }, {
            "label": "D Label",
            "value": 196.45946739256
        }, {
            "label": "E Label",
            "value": 0.19434030906893
        }, {
            "label": "F Label",
            "value": -98.079782601442
        }, {
            "label": "G Label",
            "value": -13.925743130903
        }, {
            "label": "H Label",
            "value": -5.1387322875705
        }]
    }]
};

function analyticsBarChartData() {
    return [{
        "key": "Apple",
        "values": [{
            "x": 0,
            "y": 0.18281643812078985
        }, {
            "x": 1,
            "y": 0.14353895746171474
        }, {
            "x": 2,
            "y": 0.18273320307489485
        }, {
            "x": 3,
            "y": 0.14293340092990547
        }, {
            "x": 4,
            "y": 0.16404536883346738
        }, {
            "x": 5,
            "y": 0.16386436859611422
        }, {
            "x": 6,
            "y": 0.19923155752476307
        }, {
            "x": 7,
            "y": 0.13234739950858057
        }, {
            "x": 8,
            "y": 0.18750452012754978
        }, {
            "x": 9,
            "y": 0.18111726776696743
        }, {
            "x": 10,
            "y": 0.19399227800986
        }, {
            "x": 11,
            "y": 0.16923715649556456
        }, {
            "x": 12,
            "y": 0.309011295373967
        }, {
            "x": 13,
            "y": 1.16623446935793
        }, {
            "x": 14,
            "y": 0.20396961646063025
        }, {
            "x": 15,
            "y": 0.1988348567005348
        }, {
            "x": 16,
            "y": 0.15960914412640276
        }, {
            "x": 17,
            "y": 0.16645460193977363
        }, {
            "x": 18,
            "y": 0.10238536875705484
        }, {
            "x": 19,
            "y": 0.10859150744669736
        }, {
            "x": 20,
            "y": 0.11720136126806828
        }, {
            "x": 21,
            "y": 0.16559298343557596
        }, {
            "x": 22,
            "y": 0.16729986067490715
        }, {
            "x": 23,
            "y": 0.14201723252711054
        }, {
            "x": 24,
            "y": 0.14596370565789957
        }, {
            "x": 25,
            "y": 0.11025421236078477
        }, {
            "x": 26,
            "y": 0.16869594176030214
        }, {
            "x": 27,
            "y": 0.1245835674176106
        }, {
            "x": 28,
            "y": 0.17529972689138673
        }, {
            "x": 29,
            "y": 0.14939347447103152
        }, {
            "x": 30,
            "y": 0.16959877092690184
        }, {
            "x": 31,
            "y": 0.15652304471668807
        }, {
            "x": 32,
            "y": 0.2810683671376168
        }, {
            "x": 33,
            "y": 0.558930504068528
        }, {
            "x": 34,
            "y": 1.1061420862158813
        }, {
            "x": 35,
            "y": 1.923229788411552
        }, {
            "x": 36,
            "y": 2.9928935460818593
        }, {
            "x": 37,
            "y": 3.8556113851960703
        }, {
            "x": 38,
            "y": 4.192163286043639
        }, {
            "x": 39,
            "y": 3.859115335498611
        }, {
            "x": 40,
            "y": 3.0849736656776727
        }, {
            "x": 41,
            "y": 2.2611125473968516
        }, {
            "x": 42,
            "y": 1.5193515624065335
        }, {
            "x": 43,
            "y": 1.0027031346385362
        }, {
            "x": 44,
            "y": 0.7535910095259226
        }, {
            "x": 45,
            "y": 0.5838154538327304
        }]
    }, {
        "key": "Facebook",
        "values": [{
            "x": 0,
            "y": 3.167602002301715
        }, {
            "x": 1,
            "y": 4.5092804677874385
        }, {
            "x": 2,
            "y": 4.748285723134992
        }, {
            "x": 3,
            "y": 3.546607658433239
        }, {
            "x": 4,
            "y": 1.8889426658655284
        }, {
            "x": 5,
            "y": 0.803556186526082
        }, {
            "x": 6,
            "y": 0.31599694929880306
        }, {
            "x": 7,
            "y": 0.21036364860475626
        }, {
            "x": 8,
            "y": 0.1361626031116022
        }, {
            "x": 9,
            "y": 0.15363380445176708
        }, {
            "x": 10,
            "y": 0.11852358058569748
        }, {
            "x": 11,
            "y": 0.14923461240179356
        }, {
            "x": 12,
            "y": 0.16113239148162775
        }, {
            "x": 13,
            "y": 0.13002047640545722
        }, {
            "x": 14,
            "y": 0.11965466998473913
        }, {
            "x": 15,
            "y": 0.11231912814575011
        }, {
            "x": 16,
            "y": 0.12590515874326486
        }, {
            "x": 17,
            "y": 0.12120497592259201
        }, {
            "x": 18,
            "y": 0.16296911970712247
        }, {
            "x": 19,
            "y": 0.1587719447910786
        }, {
            "x": 20,
            "y": 0.16992049703840167
        }, {
            "x": 21,
            "y": 0.10380793006625028
        }, {
            "x": 22,
            "y": 0.15723095824941993
        }, {
            "x": 23,
            "y": 0.1875653438270092
        }, {
            "x": 24,
            "y": 0.1781101561849937
        }, {
            "x": 25,
            "y": 0.17552990750409664
        }, {
            "x": 26,
            "y": 0.1542576068546623
        }, {
            "x": 27,
            "y": 0.16437839609570803
        }, {
            "x": 28,
            "y": 0.16794685379136354
        }, {
            "x": 29,
            "y": 0.10660002923104916
        }, {
            "x": 30,
            "y": 0.11197099837009034
        }, {
            "x": 31,
            "y": 0.14966958018490445
        }, {
            "x": 32,
            "y": 0.13109371219885096
        }, {
            "x": 33,
            "y": 0.17090932214866206
        }, {
            "x": 34,
            "y": 0.13402476651030298
        }, {
            "x": 35,
            "y": 0.1287131764415
        }, {
            "x": 36,
            "y": 0.14851449697813068
        }, {
            "x": 37,
            "y": 0.10254402631150537
        }, {
            "x": 38,
            "y": 0.15455211870684646
        }, {
            "x": 39,
            "y": 0.1474804342727728
        }, {
            "x": 40,
            "y": 0.1388981057182687
        }, {
            "x": 41,
            "y": 0.116639680142495
        }, {
            "x": 42,
            "y": 0.18525189356500565
        }, {
            "x": 43,
            "y": 0.18747500139534318
        }, {
            "x": 44,
            "y": 0.21113985483123493
        }, {
            "x": 45,
            "y": 0.2939609134092086
        }]
    }, {
        "key": "Pinterest",
        "values": [{
            "x": 0,
            "y": 0.15407976127668657
        }, {
            "x": 1,
            "y": 0.16562366455724828
        }, {
            "x": 2,
            "y": 0.4261845946018459
        }, {
            "x": 3,
            "y": 0.9815217359760405
        }, {
            "x": 4,
            "y": 2.247199609760293
        }, {
            "x": 5,
            "y": 3.686882494942119
        }, {
            "x": 6,
            "y": 4.717658548653476
        }, {
            "x": 7,
            "y": 4.756000384386207
        }, {
            "x": 8,
            "y": 3.8826491900015037
        }, {
            "x": 9,
            "y": 2.858563903297096
        }, {
            "x": 10,
            "y": 1.8798602940549098
        }, {
            "x": 11,
            "y": 1.0345394940778647
        }, {
            "x": 12,
            "y": 0.5601941116392266
        }, {
            "x": 13,
            "y": 0.3980894691702985
        }, {
            "x": 14,
            "y": 0.5542623319769906
        }, {
            "x": 15,
            "y": 0.7119648829395313
        }, {
            "x": 16,
            "y": 1.032029777923349
        }, {
            "x": 17,
            "y": 1.2921528475721455
        }, {
            "x": 18,
            "y": 1.6059333288985043
        }, {
            "x": 19,
            "y": 1.8573084011391332
        }, {
            "x": 20,
            "y": 2.1107848072219184
        }, {
            "x": 21,
            "y": 2.3059297743968576
        }, {
            "x": 22,
            "y": 2.2263189176144524
        }, {
            "x": 23,
            "y": 1.9295222437270703
        }, {
            "x": 24,
            "y": 1.2735377158241874
        }, {
            "x": 25,
            "y": 0.7414166922707226
        }, {
            "x": 26,
            "y": 0.4301830781201098
        }, {
            "x": 27,
            "y": 0.29909752699332914
        }, {
            "x": 28,
            "y": 0.1469259083882706
        }, {
            "x": 29,
            "y": 0.14623980620564972
        }, {
            "x": 30,
            "y": 0.16338558607983691
        }, {
            "x": 31,
            "y": 0.3869125623154126
        }, {
            "x": 32,
            "y": 1.0713470835156191
        }, {
            "x": 33,
            "y": 1.8052930549685207
        }, {
            "x": 34,
            "y": 1.8713256427782692
        }, {
            "x": 35,
            "y": 1.153365982788846
        }, {
            "x": 36,
            "y": 0.4520140328116348
        }, {
            "x": 37,
            "y": 0.2386535881251972
        }, {
            "x": 38,
            "y": 0.11017513133295084
        }, {
            "x": 39,
            "y": 0.17437285946548492
        }, {
            "x": 40,
            "y": 0.17207948647733695
        }, {
            "x": 41,
            "y": 0.16497943936621332
        }, {
            "x": 42,
            "y": 0.10209963621971162
        }, {
            "x": 43,
            "y": 0.1566391147057674
        }, {
            "x": 44,
            "y": 0.11603481187489716
        }, {
            "x": 45,
            "y": 0.13244019800331605
        }]
    }]
}

function barChartData() {
    return [{
        "key": "Stream #0",
        "values": [{
            "x": 0,
            "y": 0.18281643812078985
        }, {
            "x": 1,
            "y": 0.14353895746171474
        }, {
            "x": 2,
            "y": 0.18273320307489485
        }, {
            "x": 3,
            "y": 0.14293340092990547
        }, {
            "x": 4,
            "y": 0.16404536883346738
        }, {
            "x": 5,
            "y": 0.16386436859611422
        }, {
            "x": 6,
            "y": 0.19923155752476307
        }, {
            "x": 7,
            "y": 0.13234739950858057
        }, {
            "x": 8,
            "y": 0.18750452012754978
        }, {
            "x": 9,
            "y": 0.18111726776696743
        }, {
            "x": 10,
            "y": 0.19399227800986
        }, {
            "x": 11,
            "y": 0.16923715649556456
        }, {
            "x": 12,
            "y": 0.309011295373967
        }, {
            "x": 13,
            "y": 1.16623446935793
        }, {
            "x": 14,
            "y": 0.20396961646063025
        }, {
            "x": 15,
            "y": 0.1988348567005348
        }, {
            "x": 16,
            "y": 0.15960914412640276
        }, {
            "x": 17,
            "y": 0.16645460193977363
        }, {
            "x": 18,
            "y": 0.10238536875705484
        }, {
            "x": 19,
            "y": 0.10859150744669736
        }, {
            "x": 20,
            "y": 0.11720136126806828
        }, {
            "x": 21,
            "y": 0.16559298343557596
        }, {
            "x": 22,
            "y": 0.16729986067490715
        }, {
            "x": 23,
            "y": 0.14201723252711054
        }, {
            "x": 24,
            "y": 0.14596370565789957
        }, {
            "x": 25,
            "y": 0.11025421236078477
        }, {
            "x": 26,
            "y": 0.16869594176030214
        }, {
            "x": 27,
            "y": 0.1245835674176106
        }, {
            "x": 28,
            "y": 0.17529972689138673
        }, {
            "x": 29,
            "y": 0.14939347447103152
        }, {
            "x": 30,
            "y": 0.16959877092690184
        }, {
            "x": 31,
            "y": 0.15652304471668807
        }, {
            "x": 32,
            "y": 0.2810683671376168
        }, {
            "x": 33,
            "y": 0.558930504068528
        }, {
            "x": 34,
            "y": 1.1061420862158813
        }, {
            "x": 35,
            "y": 1.923229788411552
        }, {
            "x": 36,
            "y": 2.9928935460818593
        }, {
            "x": 37,
            "y": 3.8556113851960703
        }, {
            "x": 38,
            "y": 4.192163286043639
        }, {
            "x": 39,
            "y": 3.859115335498611
        }, {
            "x": 40,
            "y": 3.0849736656776727
        }, {
            "x": 41,
            "y": 2.2611125473968516
        }, {
            "x": 42,
            "y": 1.5193515624065335
        }, {
            "x": 43,
            "y": 1.0027031346385362
        }, {
            "x": 44,
            "y": 0.7535910095259226
        }, {
            "x": 45,
            "y": 0.5838154538327304
        }]
    }, {
        "key": "Stream #1",
        "values": [{
            "x": 0,
            "y": 3.167602002301715
        }, {
            "x": 1,
            "y": 4.5092804677874385
        }, {
            "x": 2,
            "y": 4.748285723134992
        }, {
            "x": 3,
            "y": 3.546607658433239
        }, {
            "x": 4,
            "y": 1.8889426658655284
        }, {
            "x": 5,
            "y": 0.803556186526082
        }, {
            "x": 6,
            "y": 0.31599694929880306
        }, {
            "x": 7,
            "y": 0.21036364860475626
        }, {
            "x": 8,
            "y": 0.1361626031116022
        }, {
            "x": 9,
            "y": 0.15363380445176708
        }, {
            "x": 10,
            "y": 0.11852358058569748
        }, {
            "x": 11,
            "y": 0.14923461240179356
        }, {
            "x": 12,
            "y": 0.16113239148162775
        }, {
            "x": 13,
            "y": 0.13002047640545722
        }, {
            "x": 14,
            "y": 0.11965466998473913
        }, {
            "x": 15,
            "y": 0.11231912814575011
        }, {
            "x": 16,
            "y": 0.12590515874326486
        }, {
            "x": 17,
            "y": 0.12120497592259201
        }, {
            "x": 18,
            "y": 0.16296911970712247
        }, {
            "x": 19,
            "y": 0.1587719447910786
        }, {
            "x": 20,
            "y": 0.16992049703840167
        }, {
            "x": 21,
            "y": 0.10380793006625028
        }, {
            "x": 22,
            "y": 0.15723095824941993
        }, {
            "x": 23,
            "y": 0.1875653438270092
        }, {
            "x": 24,
            "y": 0.1781101561849937
        }, {
            "x": 25,
            "y": 0.17552990750409664
        }, {
            "x": 26,
            "y": 0.1542576068546623
        }, {
            "x": 27,
            "y": 0.16437839609570803
        }, {
            "x": 28,
            "y": 0.16794685379136354
        }, {
            "x": 29,
            "y": 0.10660002923104916
        }, {
            "x": 30,
            "y": 0.11197099837009034
        }, {
            "x": 31,
            "y": 0.14966958018490445
        }, {
            "x": 32,
            "y": 0.13109371219885096
        }, {
            "x": 33,
            "y": 0.17090932214866206
        }, {
            "x": 34,
            "y": 0.13402476651030298
        }, {
            "x": 35,
            "y": 0.1287131764415
        }, {
            "x": 36,
            "y": 0.14851449697813068
        }, {
            "x": 37,
            "y": 0.10254402631150537
        }, {
            "x": 38,
            "y": 0.15455211870684646
        }, {
            "x": 39,
            "y": 0.1474804342727728
        }, {
            "x": 40,
            "y": 0.1388981057182687
        }, {
            "x": 41,
            "y": 0.116639680142495
        }, {
            "x": 42,
            "y": 0.18525189356500565
        }, {
            "x": 43,
            "y": 0.18747500139534318
        }, {
            "x": 44,
            "y": 0.21113985483123493
        }, {
            "x": 45,
            "y": 0.2939609134092086
        }]
    }, {
        "key": "Stream #2",
        "values": [{
            "x": 0,
            "y": 0.15407976127668657
        }, {
            "x": 1,
            "y": 0.16562366455724828
        }, {
            "x": 2,
            "y": 0.4261845946018459
        }, {
            "x": 3,
            "y": 0.9815217359760405
        }, {
            "x": 4,
            "y": 2.247199609760293
        }, {
            "x": 5,
            "y": 3.686882494942119
        }, {
            "x": 6,
            "y": 4.717658548653476
        }, {
            "x": 7,
            "y": 4.756000384386207
        }, {
            "x": 8,
            "y": 3.8826491900015037
        }, {
            "x": 9,
            "y": 2.858563903297096
        }, {
            "x": 10,
            "y": 1.8798602940549098
        }, {
            "x": 11,
            "y": 1.0345394940778647
        }, {
            "x": 12,
            "y": 0.5601941116392266
        }, {
            "x": 13,
            "y": 0.3980894691702985
        }, {
            "x": 14,
            "y": 0.5542623319769906
        }, {
            "x": 15,
            "y": 0.7119648829395313
        }, {
            "x": 16,
            "y": 1.032029777923349
        }, {
            "x": 17,
            "y": 1.2921528475721455
        }, {
            "x": 18,
            "y": 1.6059333288985043
        }, {
            "x": 19,
            "y": 1.8573084011391332
        }, {
            "x": 20,
            "y": 2.1107848072219184
        }, {
            "x": 21,
            "y": 2.3059297743968576
        }, {
            "x": 22,
            "y": 2.2263189176144524
        }, {
            "x": 23,
            "y": 1.9295222437270703
        }, {
            "x": 24,
            "y": 1.2735377158241874
        }, {
            "x": 25,
            "y": 0.7414166922707226
        }, {
            "x": 26,
            "y": 0.4301830781201098
        }, {
            "x": 27,
            "y": 0.29909752699332914
        }, {
            "x": 28,
            "y": 0.1469259083882706
        }, {
            "x": 29,
            "y": 0.14623980620564972
        }, {
            "x": 30,
            "y": 0.16338558607983691
        }, {
            "x": 31,
            "y": 0.3869125623154126
        }, {
            "x": 32,
            "y": 1.0713470835156191
        }, {
            "x": 33,
            "y": 1.8052930549685207
        }, {
            "x": 34,
            "y": 1.8713256427782692
        }, {
            "x": 35,
            "y": 1.153365982788846
        }, {
            "x": 36,
            "y": 0.4520140328116348
        }, {
            "x": 37,
            "y": 0.2386535881251972
        }, {
            "x": 38,
            "y": 0.11017513133295084
        }, {
            "x": 39,
            "y": 0.17437285946548492
        }, {
            "x": 40,
            "y": 0.17207948647733695
        }, {
            "x": 41,
            "y": 0.16497943936621332
        }, {
            "x": 42,
            "y": 0.10209963621971162
        }, {
            "x": 43,
            "y": 0.1566391147057674
        }, {
            "x": 44,
            "y": 0.11603481187489716
        }, {
            "x": 45,
            "y": 0.13244019800331605
        }]
    }]
}

function easyPieChart(element, barColor, trackColor, size) {
    $(element).easyPieChart({
        barColor: barColor,
        size: size,
        trackColor: trackColor,
        scaleColor: false,
        animate: true,
        lineWidth: 10,
        lineCap: 'square',
        animate: 1000
    });
}
