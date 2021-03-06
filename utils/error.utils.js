module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "", email: "", password: "mauvais password"}

    if (err.message.includes("pseudo")) {
        errors.pseudo = "Pseudo incorrect ou déja pris"
    }
    if (err.message.includes("email")) {
        errors.email = "Email incorrect";
    }
    if (err.message.includes("password")) {
        errors.password = "Le mot de passe doit faire 6caractères minimum";
    }
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo') ) {
        errors.email = "Ce pseudo est déja enregistrée";
    }
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email') ) {
        errors.email = "Cet email est déja enregistrée";
    }
    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = {email: '', password: ''} 

    if (err.message.includes("email")) {
        errors.email = "Email inconnu "
    }

    if (err.message.includes("password")) {
        errors.password = 'Le mot de passe ne correspond pas'
    }

    return errors;
}