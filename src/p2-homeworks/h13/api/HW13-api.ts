import axios, {AxiosError} from "axios";

/*const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
    body: {success: true}
})*/

export const checkboxAPI = {
    sendSuccess(value: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value} )
            .then(()=> {
                console.log('success')
            })
            .catch((error: AxiosError<{ errorText: string }>) => {
                if (error.response) {
                    console.log(error.response.data.errorText)
                }
                console.log(error.message)
            })
    }
}
