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
}

export default AuthService;
