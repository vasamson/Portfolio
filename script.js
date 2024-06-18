function afficherElement(elementIdaffiche) {
    // Sélection de tous les éléments ayant la classe 'projet'
    const projets = document.getElementsByClassName('projet');

    // Parcourir tous les éléments pour les cacher si ce ne sont pas ceux à ouvrir
    for (let projet of projets) {
        if (projet.id !== elementIdaffiche && projet.classList.contains('open')) {
            slideUp(projet);
            projet.classList.remove('open'); // Retirer la classe 'open'
        }
    }

    // Sélectionner l'élément spécifique à afficher ou cacher
    const element = document.getElementById(elementIdaffiche);

    // Vérifier si l'élément est actuellement ouvert
    if (!element.classList.contains('open')) {
        // Si l'élément n'est pas ouvert, le déplier
        slideDown(element);
        element.classList.add('open'); // Ajouter la classe 'open'
    } else {
        // Sinon, le replier
        slideUp(element);
        element.classList.remove('open'); // Retirer la classe 'open'
    }
}

function slideDown(element) {
    // Rendre l'élément visible et activer l'overflow
    element.style.display = 'block';
    element.style.overflow = 'hidden';

    // Commencer l'animation à partir de la hauteur zéro
    element.style.height = '0';
    element.offsetHeight; // Déclencher le recalcul de la hauteur

    // Définir la transition pour la hauteur
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = '0.3s';
    element.style.transitionTimingFunction = 'ease';

    // Régler la hauteur finale
    element.style.height = element.scrollHeight + 'px';
}

function slideUp(element) {
    // Régler la hauteur à celle actuelle
    element.style.overflow = 'hidden';
    element.style.height = element.scrollHeight + 'px';
    element.offsetHeight; // Forcer le recalcul

    // Transition pour réduire la hauteur à zéro
    element.style.transition = 'height 0.3s ease';
    element.style.height = '0';

    // Attendre la fin de la transition
    element.addEventListener('transitionend', function transitionEnd() {
        element.removeEventListener('transitionend', transitionEnd); // Supprimer l'écouteur
        element.style.display = 'none'; // Masquer l'élément après l'animation
    });
}
