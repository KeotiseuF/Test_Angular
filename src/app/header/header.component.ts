import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.

@Component({
  selector: "app-header", // Nom du composant.
  templateUrl: "./header.component.html", // HTML du composant.
  styleUrls: ["./header.component.scss"], // SCSS du composant.
})

// Classe qui affiche le header. 
export class HeaderComponent implements OnInit {

  ngOnInit() {
    const pagePresentation = document.getElementsByClassName("page_presentation");
    const displayExperiences = document.getElementById("experiences_button");
    const pageExperience = document.getElementsByName("page_experience");
    const experience = document.getElementsByClassName("experience");
    const nav = document.getElementById("button_accueil");
    const getValueLocal = localStorage.getItem("experience");

    // Fait ressortir avec de la couleur le boutton et les liens par rapport à la page sur laquelle on est.
    if (pagePresentation[0] !== undefined) {
      nav!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
    } 
    
    else if (pageExperience !== undefined && getValueLocal === "one") {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[0]!.setAttribute("style", "color: #2bd34f;");
    } 
    
    else if (pageExperience !== undefined && getValueLocal === "two") {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[1]!.setAttribute("style", "color: #2bd34f;");
    } 
    
    else if (pageExperience !== undefined && getValueLocal === "three") {
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

  // Lors du clique sur une expérience en particulier envoi une donnée au local storage et 
  // si on est sur une page différente de celle qu'on a choisi recharge la page pour que les nouvelles données s'affichent. 
  onDisplayExperienceOne() {
    const pagePresentation =
      document.getElementsByClassName("page_presentation");
    localStorage.setItem("experience", "one");
    if (pagePresentation.length === 0) {
      location.reload();
    }
  }

  onDisplayExperienceTwo() {
    localStorage.setItem("experience", "two");
    const pagePresentation =
      document.getElementsByClassName("page_presentation");
    if (pagePresentation.length === 0) {
      location.reload();
    }
  }

  onDisplayExperienceThree() {
    localStorage.setItem("experience", "three");
    const pagePresentation =
      document.getElementsByClassName("page_presentation");
    if (pagePresentation.length === 0) {
      location.reload();
    }
  }
}
