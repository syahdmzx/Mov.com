const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(){

    loginBtn.innerHTML = "Loading...";

    setTimeout(function(){

        document.body.innerHTML = `
        
        <div class="container">
            <h1 class="logo">MOVSITE</h1>

            <div class="login-box">
                <h2>Welcome 🎬</h2>
                <p>You are now inside MOVSITE demo.</p>

                <button onclick="location.reload()">
                LOGOUT
                </button>
            </div>

        </div>

        `;

    },1500);

});
