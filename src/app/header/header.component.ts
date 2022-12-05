import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { DisplayExperienceService } from "../services/display-experience.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-header", // Nom du composant.
  templateUrl: "./header.component.html", // HTML du composant.
  styleUrls: ["./header.component.scss"], // SCSS du composant.
})

// Classe qui affiche le header. 
export class HeaderComponent implements OnInit {

  constructor(private route : ActivatedRoute ){}

  ngOnInit() {
    const pagePresentation = document.getElementsByClassName("page_presentation");
    const displayExperiences = document.getElementById("experiences_button");
    const pageExperience = document.getElementsByName("page_experience");
    const experience = document.getElementsByClassName("experience");
    const nav = document.getElementById("button_accueil");
    const idExperience = +this.route.snapshot.params["id"]; // Récupère l'id qui est un string et avec le "+" convertir l'id en number.

    // Fait ressortir avec de la couleur le boutton et les liens par rapport à la page sur laquelle on est.
    if (pagePresentation[0] !== undefined) {
      nav!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
    } 
    
    else if (pageExperience !== undefined && idExperience === 1) {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[0]!.setAttribute("style", "color: #2bd34f;");
    } 
    
    else if (pageExperience !== undefined && idExperience === 2) {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[1]!.setAttribute("style", "color: #2bd34f;");
    } 
    
    else if (pageExperience !== undefined && idExperience === 3 ) {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[2]!.setAttribute("style", "color: #2bd34f;");
    }
  }

  // Suite à un clique un bouton en particulier fait ressortir avec de la couleur le bouton et les liens concernaient.
  onDisplayExperiences() {
    const displayExperiences = document.getElementById("experiences_button");
    const nav = document.getElementById("button_accueil");
    displayExperiences!.setAttribute(
      "style",
      "overflow:initial; background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
    );
    nav!.setAttribute("style", "background: none;");
  }

  onDisplayAccueil() {
    const displayExperiences = document.getElementById("experiences_button");
    const nav = document.getElementById("button_accueil");
    displayExperiences!.setAttribute(
      "style",
      "overflow:hidden; background: none;"
    );
    nav!.setAttribute(
      "style",
      "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
    );
  } 
}
