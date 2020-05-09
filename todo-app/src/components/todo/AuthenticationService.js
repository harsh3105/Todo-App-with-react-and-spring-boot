import axios from 'axios'; 

class AuthenticationService {

    executeBasicAuthenticationService(username,password){
        console.log("pop")
        return axios.get('http://localhost:8080/basicauth',{ 
            headers: {
                authorization : this.createBasicAuthToken(username,password)
            }
    })
    }

    executeJwtAuthenticationService(username,password){
        console.log("pop")
        return axios.post('http://localhost:8080/authenticate',{ 
            username,
            password
    })
    }

    createBasicAuthToken(username,password){
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        return basicAuthHeader
    }

    createJWTToken(token){
        let basicAuthHeader = 'Bearer ' + token
        return basicAuthHeader
    }

    registerSuccessfulLogin(username,password){
        //let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        //console.log(username)
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return false;
        }
        return true;
    }

    getUsername(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return '';
        }
        return user;
    }

    setupAxiosInterceptors(token){

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                config.headers.authorization = token
                }
                return config
            }
        )

    }
}

export default new AuthenticationService()