function showMessage() {

    const today = new Date();

    document.getElementById("message").innerHTML =
        "Hello from NGINX running in Docker!<br><br>" +
        "Current time: " + today.toLocaleString();

}
