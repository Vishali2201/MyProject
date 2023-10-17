function validation() {
    if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "At least six letters*";
        return false;
    } else if (document.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    } else if (document.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your Password";
        return false;
    } else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6 digits*";
        return false;
    } else if (document.Formfill.CPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter Confirm Password";
        return false;
    } else if (document.Formfill.Password.value != document.Formfill.CPassword.value) {
        document.getElementById("result").innerHTML = "Password and Confirm Password do not match";
        return false;
    } else {
        // Data is valid, send it to the server
        const userData = {
            username: document.Formfill.Username.value,
            email: document.Formfill.Email.value,
            password: document.Formfill.Password.value,
            confirm_password: document.Formfill.CPassword.value
        };

        fetch('https://foodecom-backend.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            if (data.user_id) {
                // Registration was successful, you can redirect or show a success message
                // For example, you can redirect to a success page:
                window.location.href = 'indexfinal.html';
            } else {
                // Registration failed, show an error message
                // document.getElementById("result").innerHTML = data.message;
            }
        })
        .catch(error => {
            // console.error('Error:', error);
        });

        return false; // Prevent form submission
    }
}
