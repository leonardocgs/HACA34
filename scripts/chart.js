fetch("response.json").then(response => response.json()).then(json => {


    google.charts.load('current', {
        'packages': ['corechart'],
        'language': "pt-br"
    });

    google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable([
            ['Problema', 'Segurança/Violência',
                'Alimentação/fome/pobreza', 'Educação', 'Saúde', 'Transporte público',
                'Saneamento básico', { role: 'annotation' }
            ],
            [json[0].general_title, json[0].seguranca.votes, json[0].alimentacao.votes, json[0].educacao.votes, json[0].saude.votes, json[0].transporte.votes, json[0].saneamento.votes, ''],
            [json[1].general_title, json[1].seguranca.votes, json[1].alimentacao.votes, json[1].educacao.votes, json[1].saude.votes, json[1].transporte.votes, json[1].saneamento.votes, ''],
            [json[2].general_title, json[2].seguranca.votes, json[2].alimentacao.votes, json[2].educacao.votes, json[2].saude.votes, json[2].transporte.votes, json[2].saneamento.votes, ''],
            [json[3].general_title, json[3].seguranca.votes, json[3].alimentacao.votes, json[3].educacao.votes, json[3].saude.votes, json[3].transporte.votes, json[3].saneamento.votes, ''],
            [json[4].general_title, json[4].seguranca.votes, json[4].alimentacao.votes, json[4].educacao.votes, json[4].saude.votes, json[4].transporte.votes, json[4].saneamento.votes, ''],
            [json[5].general_title, json[5].seguranca.votes, json[5].alimentacao.votes, json[5].educacao.votes, json[5].saude.votes, json[5].transporte.votes, json[5].saneamento.votes, '']
        ]);
        console.log(json[0]);

        var options = {
            title: "Problemas vinculados como principais nas fontes de comunicação",
            width: 1000,
            height: 1000,
            legend: { position: 'top', maxLines: 3 },
            bar: { groupWidth: '75%' },
            isStacked: true,
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("chart"));
        chart.draw(data, options);

    })


});