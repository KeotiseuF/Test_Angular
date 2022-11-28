import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { FetchdataServiceService } from "../fetchdata-service.service"; // Importe un service qui gère les requêtes.

@Component({
  selector: "app-footer", // Nom du composant.
  templateUrl: "./footer.component.html", // HTML du composant.
  styleUrls: ["./footer.component.scss"], // SCSS du composant.
  providers: [FetchdataServiceService], // Rend le service exploitable.
})

// Classe qui affiche mon footer.
export class FooterComponent implements OnInit {
  Url = "https://catfact.ninja/fact"; // Url à la quelle je vais faire une requête. 

  constructor(private srv: FetchdataServiceService) {} // Injecte HttpClient 

  // Fonction qui envoie une requête get et avec la réponse construit le footer.    
  getPost() {
    this.srv.getData(this.Url).subscribe((data) => {
      const footer = document.getElementsByTagName("footer");
      const selectData = Object.values(data)[0];

      const youKnow = document.createElement("h2");
      youKnow.innerHTML = "Saviez-vous ?";
      footer[0].appendChild(youKnow);

      const anecdote = document.createElement("p");
      anecdote.setAttribute("id", "anecdote");
      anecdote.innerHTML = `${selectData}`;
      footer[0].appendChild(anecdote);
    });
  }

  // Exécute la fonction getPost pour afficher les données du footer.
  ngOnInit() {
    this.getPost();
  }
}
