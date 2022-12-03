import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { DisplayExperienceService } from "../services/display-experience.service"; 

@Component({
  selector: "app-experience", // Nom du composant.
  templateUrl: "./experience.component.html", // HTML du composant.
  styleUrls: ["./experience.component.scss"], // SCSS du composant.
})

// Classe qui affiche les pages de mes expériences. 
export class ExperienceComponent implements OnInit {

  constructor(private displayExperienceService : DisplayExperienceService){}
  // Hook indispensable pour exécuter le code.
  ngOnInit() {
    
    
  }
}
