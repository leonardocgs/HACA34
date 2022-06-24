fetch('response.json')
  .then(response => response.json())
  .then(json => {
    let secondResponse
    function setChart() {
      google.charts.load('current', {
        packages: ['corechart'],
        language: 'pt-br'
      })

      google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable([
          [
            'Problema',
            'Segurança/Violência',
            'Alimentação/fome/pobreza',
            'Educação',
            'Saúde',
            'Transporte público',
            'Saneamento básico',
            { role: 'annotation' }
          ],
          [
            json[0].general_title,
            json[0].seguranca.votes,
            json[0].alimentacao.votes,
            json[0].educacao.votes,
            json[0].saude.votes,
            json[0].transporte.votes,
            json[0].saneamento.votes,
            json[0].total
          ],
          [
            json[1].general_title,
            json[1].seguranca.votes,
            json[1].alimentacao.votes,
            json[1].educacao.votes,
            json[1].saude.votes,
            json[1].transporte.votes,
            json[1].saneamento.votes,
            json[1].total
          ],
          [
            json[2].general_title,
            json[2].seguranca.votes,
            json[2].alimentacao.votes,
            json[2].educacao.votes,
            json[2].saude.votes,
            json[2].transporte.votes,
            json[2].saneamento.votes,
            json[2].total
          ],
          [
            json[3].general_title,
            json[3].seguranca.votes,
            json[3].alimentacao.votes,
            json[3].educacao.votes,
            json[3].saude.votes,
            json[3].transporte.votes,
            json[3].saneamento.votes,
            json[3].total
          ],
          [
            json[4].general_title,
            json[4].seguranca.votes,
            json[4].alimentacao.votes,
            json[4].educacao.votes,
            json[4].saude.votes,
            json[4].transporte.votes,
            json[4].saneamento.votes,
            json[4].total
          ],
          [
            json[5].general_title,
            json[5].seguranca.votes,
            json[5].alimentacao.votes,
            json[5].educacao.votes,
            json[5].saude.votes,
            json[5].transporte.votes,
            json[5].saneamento.votes,

            json[5].total
          ]
        ])
        const ticks = getTickles(json)

        var options = {
          title:
            'Problemas vinculados como principais nas fontes de comunicação',

          legend: { position: 'top', maxLines: 3 },
          bar: { groupWidth: '75%' },
          vAxis: {
            ticks: ticks

          },
          isStacked: true
        }
        var chart = new google.visualization.ColumnChart(
          document.getElementById('chart')
        )
        chart.draw(data, options)
      })

      google.charts.setOnLoadCallback(() => {
        var generalData = google.visualization.arrayToDataTable([
          ['Fontes de informação', 'votos'],
          [json[0].general_title, json[0].total],
          [json[1].general_title, json[1].total],
          [json[2].general_title, json[2].total],
          [json[3].general_title, json[3].total],
          [json[4].general_title, json[4].total],
          [json[5].general_title, json[5].total]
        ])
        var secondOption = {
          title: 'Principais fontes de informacao',
          width: 'auto',
          height: 'auto'
        }
        var second_chart = new google.visualization.PieChart(
          document.getElementById('media-pie')
        )
        second_chart.draw(generalData, secondOption)
      })

      google.charts.setOnLoadCallback(() => {
        var generalData = google.visualization.arrayToDataTable([
          ['Principais problemas', 'votos'],
          [secondResponse[0].title, secondResponse[0].votes,],
          [secondResponse[1].title, secondResponse[1].votes],
          [secondResponse[2].title, secondResponse[2].votes],
          [secondResponse[3].title, secondResponse[3].votes],
          [secondResponse[4].title, secondResponse[4].votes],
          [secondResponse[5].title, secondResponse[5].votes]
        ])
        var secondOption = {
          title: 'Principais problemas',
          slices: {
            0: { color: 'rgb(51, 102, 204)' },
            1: { color: 'rgb(255, 153, 0)' },
            2: { color: 'rgb(16, 150, 24)' },
            3: { color: 'rgb(0, 153, 198)' },
            4: { color: 'rgb(220, 57, 18)' },
            5: { color: 'rgb(153, 0, 153)' }
          }


        }

        var second_chart = new google.visualization.PieChart(
          document.getElementById('second-media-pie')
        )
        second_chart.draw(generalData, secondOption)
      })
    }

    fetch('./second_response.json')
      .then(response => response.json())
      .then(secondJson => {
        secondResponse = secondJson
        setChart()
        window.onresize = setChart
      })
  })
const getTickles = (jsonFile) => {
  console.log("O json é ", jsonFile)
  const tickles = []
  jsonFile.forEach((response) => {
    tickles.push(response.total)
  })

  const temporary = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
  const newArray = tickles.concat(temporary)
  newArray.sort((a, b) => { return a - b });

  const newTickles = newArray.filter((element, index, array) => {
    if (index != 0) {
      return element != array[index - 1] && element != undefined

    }
  }
  )
  newTickles.sort((a, b) => {
    return a - b
  })


  newTickles.push(60)
  return newTickles

}