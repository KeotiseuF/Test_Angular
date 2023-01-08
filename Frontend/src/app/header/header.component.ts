import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { Subjects } from "../services/subjects.service";

@Component({
  selector: "app-header", // Nom du composant.
  templateUrl: "./header.component.html", // HTML du composant.
  styleUrls: ["./header.component.scss"], // SCSS du composant.
})

// Classe qui affiche le header. 
export class HeaderComponent implements OnInit {

  constructor(
    private router : Router,
    private subjects: Subjects, 
    private activeRoute: ActivatedRoute 
  ){}

  displayHeader = false;
  displayMainTitle : any ;
  urlSubjectTitle! : any  ;
  urlCategory! : any;
  title! : any;

  ngOnInit() {  
    this.router.events.subscribe(data => {
      if(data instanceof NavigationEnd)
      {
        const subjectParams = this.subjects.subjectParams; 
        const qcmParams = this.subjects.qcmParams; 

        if(data.url === "/")
        {
          this.displayHeader = false;
        }
        else if(data.url === "/connexion")
        {
          this.displayHeader = true;
          this.displayMainTitle = "CONNECTION";
        }
        else if(data.url === "/accueil")
        {
          this.displayHeader = true;
          this.displayMainTitle = "BIENVENUE";
          
        }
        else if(data.url === `/accueil/${subjectParams}`)
        {
          this.title = (this.subjects.subjects as {[key: string]: any})[subjectParams].title;
          this.displayMainTitle = this.title.toUpperCase();
        }
        else if(data.url === `/accueil/${subjectParams}/${qcmParams}`)
        {
          this.urlSubjectTitle = (this.subjects.subjects as {[key: string]: any})[subjectParams].urlSubjectTitle;
          this.displayMainTitle = `${this.title} - ${this.subjects.categoryName}`.toUpperCase();
        }
      }
    })
  } 
}
