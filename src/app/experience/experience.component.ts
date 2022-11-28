import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { DataExperience } from "../experience/experience.model"; // Importe le schéma pour la présentation de mes expériences.

@Component({
  selector: "app-experience", // Nom du composant.
  templateUrl: "./experience.component.html", // HTML du composant.
  styleUrls: ["./experience.component.scss"], // SCSS du composant.
})

// Classe qui affiche les pages de mes expériences. 
export class ExperienceComponent implements OnInit {

  experienceOne!: DataExperience; //  Propriété de l'expérience 1. 
  experienceTwo!: DataExperience; //  Propriété de l'expérience 2.
  experienceThree!: DataExperience; //  Propriété de l'expérience 3.

  // Hook indispensable pour exécuter le code.
  ngOnInit() {
    const getValueLocal = localStorage.getItem("experience"); // Récupére une donnée dans le local storage, permettra d'afficher la bonne page d'expérience. 

    // Attribut des données aux propriétés.
    this.experienceOne = {
      title: "OpenClassrooms",
      imageUrl:
        "https://boisseau-informatique.fr/wp-content/uploads/2021/08/openclassrooms.jpg",
      alt: "Logo OpenClassrooms",
      description:
        "OpenClassrooms est une formation, où j'ai pu voir ce qu'était un framework, une bibliothèque, l'a11y , l'OWASP ou transpiler mon code pour qu'il s'adapte à tous les navigateurs... " +
        "J'ai vu les différentes commandes pour git et npm, ce qui me permettra de gérer des projets en groupe sur GitHub, " +
        "j'ai aussi utilisé l'API de GitHub comme exercice ce qui m'a permis par la suite de travailler avec d'autres API (comme une API météo) " +
        "ou de créer ma propre API qui gérait l'authentification et la création/modification de post. Ce fût une formation enrichissante avec un mentor au top. " +
        "J'ai mis en place différents projets :  <br/> <br/> " +
        "&nbsp; &nbsp; &nbsp; - créé un réseau social pour une entreprise (avec MERN), <br/>" +
        "&nbsp; &nbsp; &nbsp; - géré l'affichage dynamique d'un site e-commerce, <br/>" +
        "&nbsp; &nbsp; &nbsp; - crée une API, <br/>" +
        "&nbsp; &nbsp; &nbsp; - mettre en place un projet REACT, <br/>" +
        "&nbsp; &nbsp; &nbsp; - configurer une base de données, <br/>" +
        "&nbsp; &nbsp; &nbsp; - intégré une maquette, <br/>" +
        "&nbsp; &nbsp; &nbsp; - mettre un système de veille... <br/>",
    };
    
    this.experienceTwo = {
      title: "Europ Assistance",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Europ_Assistance_Logo_.png/289px-Europ_Assistance_Logo_.png",
      alt: "Logo Europ Assistance",
      description:
        "Europ Assistance est une entreprise, où j'étais dans la branche de l'aide à la personne en téléassistance. " +
        "C'est une partie de l'entreprise où je devais répondre à des appels d'urgence rapidement et efficacement déclenchés par des utilisateurs partout en France, " +
        "les appels étaient variés cela pouvaient aller d'une erreur de déclenchement à une personne à terre qui a besoin d'aide malgré des erreurs de déclenchement, " +
        "on devait rester vigilant. Suite à la nature du déclenchement, si c'était un appel d'urgence j'appelais les pompiers ou SAMU puis prévenait la famille, ensuite " +
        "je devais rédiger un rapport de la situation mais si c'était un déclenchement sans réponse de l'utilisateur j'appelais la famille pour aller vérifier sans réponse de la " +
        "famille j'appelais les urgences qui s'en occuper. <br/> <br/>" +
        "Aussi, j'ai eu pour mission de vérifier le fonctionnement des boîtiers en appelant les utilisateurs pour faire des tests si un souci était remarqué," +
        " alors je demandais à l'utilisateur si c'était possible sinon j'appelais la famille pour s'occuper de faire certaines manipulations " +
        "au niveau du boîtier, si cela fonctionnait je rédigeais mon rapport sinon je faisais intervenir un technicien. C'était un poste qui demandait de la patience, " +
        "d'être à l'écoute pour les utilisateurs comme pour ses collègues et d'être réactif.",
    };
    
    this.experienceThree = {
      title: "Del arte",
      imageUrl:
        "https://www.bra-tendances-restauration.com/wp-content/uploads/sites/3/2015/01/Logo-del-arte.jpg",
      alt: "Logo Del Arte",
      description:
        "Del Arte est un restaurant, où j'ai commencé en tant que pizzaiolo chaque matin je mettais en place mon plan de travail, vérifier les DLC (date limite de consommation) " +
        "décharger les aliments livrés s'il y en avait. Là-bas, j'ai fait des pizzas, préparation de la pâte, le nettoyage de la cuisine... J'ai même pu apprendre à la partir chaude et froide, " +
        "c'était l'endroit où l'on préparait les pâtes, les viandes comme la pièce du boucher ou sinon les salades, desserts. <br/> <br/>" +
        "Mais par la suite un poste de serveur s'est libéré, j'ai dû prendre ce poste pour renforcer l'équipe j'ai eu pour mission la préparation de la salle avant que les clients n'arrivent, " +
        "voir ce qui manque dans le bar puis le remplir, prendre les commandes des clients et subvenir à leurs besoins. Mais cela m'arrivait que je passe en cuisine pour donner un coup de main, " +
        "c'était un poste dynamique, polyvalent. C'est grâce à ce poste que j'ai vraiment pu développer mon aisance avec les clients et comme je connaissais très bien la cuisine,  je pouvais cibler leurs besoins plus facilement.",
    };

    
    // Suite à la donnée récupérée dans le local storage affiche la page de l'expérience sélectionnée.
    if (getValueLocal === "one") {
      const pageExperience = document.getElementById("page_experience");

      const underHeader = document.createElement("div");
      pageExperience!.appendChild(underHeader);

      const logoExperience = document.createElement("img");
      logoExperience.setAttribute("src", this.experienceOne.imageUrl);
      logoExperience.setAttribute("alt", this.experienceOne.alt);
      underHeader.appendChild(logoExperience);

      const titleExperience = document.createElement("h1");
      titleExperience.className = "title_experience";
      titleExperience.innerHTML = this.experienceOne.title;
      underHeader.appendChild(titleExperience);

      const descriptionExperience = document.createElement("p");
      descriptionExperience.innerHTML = this.experienceOne.description;
      pageExperience!.appendChild(descriptionExperience);
    } 
    
    else if (getValueLocal === "two") {
      const pageExperience = document.getElementById("page_experience");

      const underHeader = document.createElement("div");
      pageExperience!.appendChild(underHeader);

      const logoExperience = document.createElement("img");
      logoExperience.setAttribute("src", this.experienceTwo.imageUrl);
      logoExperience.setAttribute("alt", this.experienceTwo.alt);
      underHeader.appendChild(logoExperience);

      const titleExperience = document.createElement("h1");
      titleExperience.className = "title_experience";
      titleExperience.innerHTML = this.experienceTwo.title;
      underHeader.appendChild(titleExperience);

      const descriptionExperience = document.createElement("p");
      descriptionExperience.innerHTML = this.experienceTwo.description;
      pageExperience!.appendChild(descriptionExperience);
    } 
    
    else {
      const pageExperience = document.getElementById("page_experience");

      const underHeader = document.createElement("div");
      pageExperience!.appendChild(underHeader);

      const logoExperience = document.createElement("img");
      logoExperience.setAttribute("src", this.experienceThree.imageUrl);
      logoExperience.setAttribute("alt", this.experienceThree.alt);
      underHeader.appendChild(logoExperience);

      const titleExperience = document.createElement("h1");
      titleExperience.className = "title_experience";
      titleExperience.innerHTML = this.experienceThree.title;
      underHeader.appendChild(titleExperience);

      const descriptionExperience = document.createElement("p");
      descriptionExperience.innerHTML = this.experienceThree.description;
      pageExperience!.appendChild(descriptionExperience);
    }
  }
}
