/* eslint no-restricted-globals: 0*/
import auth0 from "auth0-js";

const LOGIN_SUCCESS_PAGE = "/knacklist";
const LOGIN_FAILURE_PAGE = "/";

const keys = require("./keys");

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dbar-knack.auth0.com",
        clientID: keys.auth.clientID,
        clientSecret: keys.auth.clientSecret,
        redirectUri: "http://localhost:3000/callback",
        audience: "https://dbar-knack.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);                localStorage.setItem("access_token", authResults.accessToken);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        })
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
}