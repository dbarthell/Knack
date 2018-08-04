import React from "react";

const navStyle = {
    color: "#fff",
    fontSize: "18px",
    background: "rgba(255,255,255,0.2)",
    textDecoration: "none",
    padding: "10px",
    display: "block"
}

const header = {
    maxWidth: "960px",
    margin: "30px auto",
    padding: "0 10px",
    color: "#333"
}

const googleBtn = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px",
    background: "#ff5353"
}

function Auth() {
    return (
    <div>
    <nav>
        <ul>
            <button><a style={navStyle} href={"/auth/logout"}>Logout</a></button>
            <button><a style={navStyle} href={"/auth/login"}>Login</a></button>
            <button><a style={navStyle} href={"/"}>Homepage</a></button>
        </ul>
    </nav>
    <header style={header}>
        <h1>Login using...</h1>
    </header>
    <main>
        <a style={googleBtn} className="google-btn" href={"/auth/google"}>Google</a>
    </main>
    </div>
    )}

  export default Auth;