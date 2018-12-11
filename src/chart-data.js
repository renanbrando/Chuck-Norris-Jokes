export const chartData = {
    data: {
      labels: ['Number'],
      datasets: [
        { // one line graph
          label: 'Jokes Length',
          data: [0, 0, 1, 2, 67, 62, 27, 14],
          backgroundColor: [
            '#36495d' // Blue
          ],
          borderColor: [
            '#36495d'
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true
    }
  }
  
  export default chartData;