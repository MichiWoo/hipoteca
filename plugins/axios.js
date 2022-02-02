export default function ({ $axios }) {
  $axios.onError((error) => {
    console.log(error)
  })

  $axios.onRequest(() => {
    const token = localStorage.getItem('token')
    $axios.setHeader('Content-Type', 'application/json')
    $axios.setToken(token, 'Bearer')
  })
}
