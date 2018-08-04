import auth0 from "auth0-js";

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
}