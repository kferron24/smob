Bienvenue sur le code de l'application SMOB !

Cette application a pour but d'aider les utilisateurs à obtenir des informations sur leur daily routines.
Une routine est un trajet entre un point A et B avec une heure d'arrivée prédéfinie.

L'application est fini dans son prototype même si de nombreuses améliorations peuvent clairement être apportées.
Elle est d'ailleurs le support parfait pour les infos sur létat du traffic qui n'a malheuresement pas été finalisé dans les autres parties du projet.

Dans le code source, vous trouverez :

- Des composents (les pages de LogIn et de SignIn, les pages de d"tails de chaque routine)
- Des helpers (les fonctions d'appels de back à firebase ou autres, les types et les fonctions de formattages)
- Des views (les pages majeures de l'applications) dont l'homepage (apparition du logo et de l'authentification), le board (véritable homepage) et l'ajout de routine

Il est important de noter que tous le styles autour de ces éléments est écrit dans un fichier spécifique à chaque dossier.
De plus, un fichier de couleur regroupe la palette de l'application.

Pensez à ajouter votre propre clé API Google aux endroits spécifiés (cherchez GOOGLE API KEY) ainsi que le bon fichier googleservices.json pour utiliser votre projet firebase.
