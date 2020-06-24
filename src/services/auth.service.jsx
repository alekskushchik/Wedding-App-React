import axios from "axios";

const API_URL = "https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login";

class AuthService {

    static logout() {
        localStorage.removeItem("user");
        window.location.reload()
    }

    static login(email, password) {
        return axios
            .post(API_URL, {
                email,
                password
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                console.log(response)
                return response.data;
            });
    }

    static updateBlog () {
        //     const putMethod = {
        //         method: 'PUT',
        //         headers: {
        //             "Content-type": "application/json",
        //             "Authorization": "Bearer " + localStorage.getItem('user')
        //         },
        //         body: JSON.stringify(data.content) // We send data in JSON format
        //     }
        //
        //     fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/info', putMethod)
        //         .then(response => response.json())
        //         .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        //         .catch(err => console.log(err))
        // }
        // eslint-disable-next-line no-restricted-globals
        window.location.reload()
    }
}

export default AuthService;
