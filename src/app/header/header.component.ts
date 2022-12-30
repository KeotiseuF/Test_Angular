import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { NavigationEnd, Router } from "@angular/router";
import { Subjects } from "../services/subjects.service";

@Component({
  selector: "app-header", // Nom du composant.
  templateUrl: "./header.component.html", // HTML du composant.
  styleUrls: ["./header.component.scss"], // SCSS du composant.
})

// Classe qui affiche le header. 
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private subjects : Subjects ){}

  displayHeader = false;
  displayMainTitle : any ;
  urlSubjectTitle! : any  ;
  urlCategory! : any;
  title! : any;

  ngOnInit() {  
    this.router.events.subscribe(data => {
      if(data instanceof NavigationEnd)
      {
        const id = this.subjects.num;
        
        if(id !== undefined)
        {
          this.urlSubjectTitle = this.subjects.subjects[id].urlSubjectTitle;
          this.title = this.subjects.subjects[id].title;
        }
        
        if(data.url === "/")
        {
          this.displayHeader = false;
        }
        else if(data.url === "/accueil")
        {
          this.displayHeader = true;
          this.displayMainTitle = "BIENVENUE";
          
        }
        else if(data.url === `/accueil/${this.urlSubjectTitle}` )
        {
          this.displayMainTitle = this.title.toUpperCase();
        }
        else if(data.url === `/accueil/${this.urlSubjectTitle}/${this.subjects.categoryUrl}`)
        {
          this.displayMainTitle = `${this.title} - ${this.subjects.categoryName}`.toUpperCase();
        }
      }
    })
  } 
}
