import { Injectable } from "@angular/core";
import { ExperienceService } from "./experience.service";

@Injectable({
    providedIn: "root"
})

export class DisplayExperienceService  {
    constructor(private experienceService: ExperienceService) {}

     display (e : number) {
        const pageExperience = document.getElementById("page_experience");
        console.log(pageExperience)
        const underHeader = document.createElement("div");
        pageExperience!.appendChild(underHeader);

        const logoExperience = document.createElement("img");
        logoExperience.setAttribute("src", this.experienceService.experiences[e].imageUrl);
        logoExperience.setAttribute("alt", this.experienceService.experiences[e].alt);
        underHeader.appendChild(logoExperience);

        const titleExperience = document.createElement("h1");
        titleExperience.className = "title_experience";
        titleExperience.innerHTML = this.experienceService.experiences[e].title;
        underHeader.appendChild(titleExperience);

        const descriptionExperience = document.createElement("p");
        descriptionExperience.innerHTML = this.experienceService.experiences[e].description;
        pageExperience!.appendChild(descriptionExperience);
    } 
}