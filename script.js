let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let hide = document.getElementById("hide");
        let hide1 = document.getElementById("hide1");
        let hide2 = document.getElementById("hide2");
        let hide3 = document.getElementById("hide3");
        let hide4 = document.getElementById("hide4");
        let title = document.getElementById("title");

        signinBtn.onclick = function () {
            hide.style.maxHeight = "0";
            hide1.style.maxHeight = "0";
            hide2.style.maxHeight = "0";
            hide3.style.maxHeight = "0";
            hide4.style.maxHeight = "0";
            title.innerHTML="Sign In";
            signupBtn.classList.add("disable");
            signinBtn.classList.remove("disable");
        }
        signupBtn.onclick = function () {
            hide.style.maxHeight = "65px";
            hide1.style.maxHeight = "65px";
            hide2.style.maxHeight = "65px";
            hide3.style.maxHeight = "65px";
            hide4.style.maxHeight = "65px";
            title.innerHTML="Sign Up";
            signinBtn.classList.add("disable");
            signupBtn.classList.remove("disable");
        }