export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    console.log(error)
    redirect('/auth/login')
  })

  $axios.onRequest((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
      config.headers.common['Content-Type'] = 'application/json'
    }
  })
}
