window.addEventListener("DOMContentLoaded", (event) =>  {
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // récupérer les valeurs des champs du formulaire
    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // validation des champs
    if (!nom || !email) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    } else {
        alert('Nous vous enverrons le programme par mail. Veuillez consulter vos spams si vous ne le retrouvez pas.');
        form.submit();
    }

    // envoyer les données du formulaire au serveur
    // code ici pour envoyer les données au serveur

    // afficher le message de confirmation


    // réinitialiser le formulaire

});

});

form.reset();