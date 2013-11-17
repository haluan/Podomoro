$(function () {
        $('#container').highcharts({
            title: {
                text: 'Kejadian Kerusakan',
                x: -20 //center
            },
            subtitle: {
                text: 'Rumah No 13',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Nyala'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#809080'
                }]
            },
            tooltip: {
                valueSuffix: ' kali'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Lampu Kamar Ayah',
                data: [7, 12, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
            },{
                name: 'Lampu Kamar Doni',
                data: [7, 2, 19, 14, 4, 0, 20, 6, 23, 8, 1, 9]
            }]
        });
    });