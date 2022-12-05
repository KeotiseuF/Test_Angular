import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { DisplayExperienceService } from "../services/display-experience.service"; 
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-experience", // Nom du composant.
  templateUrl: "./experience.component.html", // HTML du composant.
  styleUrls: ["./experience.component.scss"], // SCSS du composant.
})

// Classe qui affiche les pages de mes expériences. 
export class ExperienceComponent implements OnInit {

  constructor(private displayExperienceService : DisplayExperienceService,
              private route : ActivatedRoute ){}
  
    // Hook indispensable pour exécuter le code.
    ngOnInit() {
      const idExperience = +this.route.snapshot.params["id"]; // Récupère l'id qui est un string et avec le "+" convertir l'id en number.
      const experience = document.getElementsByClassName('experience') 

      // Affiche les valeurs d'une expèrience selon l'id dans l'url.
      if (idExperience === 1)
      {
        this.displayExperienceService.display(0);
      }     
      else if (idExperience === 2)
      {
        this.displayExperienceService.display(1);
      }   
      else if (idExperience === 3)
      {
        this.displayExperienceService.display(2);
      }

      // Si une page d'expèrience est affichée remplace l'ancienne url par la nouvelle.
      experience[0].addEventListener("click", () => {
        location.replace("http://localhost:4200/accueil/experience/1")
      })

      experience[1].addEventListener("click", () => {
        location.replace("http://localhost:4200/accueil/experience/2")
      })
      
      experience[2].addEventListener("click", () => {
        location.replace("http://localhost:4200/accueil/experience/3")
      })
    }  
}
