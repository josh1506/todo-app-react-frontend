import axios from 'axios'

const userToken = localStorage.getItem('auth_token')

export default axios.create({
    baseURL: 'https://todo-app-django-server.herokuapp.com/',
    headers: {
        'Authorization': `Token ${userToken}`
    }
})