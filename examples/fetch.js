async function setOption(axios) {
  const resp = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin')
  const label = resp.data['daily']['time']
  const max_t = resp.data['daily']['temperature_2m_max']
  const min_t = resp.data['daily']['temperature_2m_min']

  return {
    title: {
      text: 'Temperature Change in Berlin'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: label
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: 'Highest',
        type: 'line',
        data: max_t,
      },
      {
        name: 'Lowest',
        type: 'line',
        data: min_t
      }
    ]
  }
}