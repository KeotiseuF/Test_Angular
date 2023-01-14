import { Component, OnInit } from "@angular/core"; // Importe un composant et un hook.
import { NavigationEnd, Router, ActivatedRoute, RoutesRecognized } from "@angular/router";
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
  ){}

  displayHeader = false;
  displayMainTitle!: any ;
  urlSubjectTitle!: any  ;
  urlCategory!: any;
  title!: any;
  subjectParams!: string;
  qcmParams!: string;

  ngOnInit() {  
    this.router.events.subscribe(data => {
      if(data instanceof RoutesRecognized)
      {
        if(data.state.root.children[0].url.length === 2)
        {
          this.subjectParams = data.state.root.children[0].url[1].path;
        }
        else if(data.state.root.children[0].url.length === 3)
        {
          this.qcmParams = data.state.root.children[0].url[2].path;
        }
        
        if(data.url === "/")
        {
          this.displayHeader = false;
        }
        else if(data.url === "/connexion")
        {
          this.displayHeader = true;
          this.displayMainTitle = "CONNEXION";
        }
        else if(data.url === "/accueil")
        {
          this.displayHeader = true;
          this.displayMainTitle = "BIENVENUE";
          
        }
        else if(data.url === `/accueil/${this.subjectParams}`)
        {
          this.title = (this.subjects.subjects as {[key: string]: any})[this.subjectParams].title;
          this.displayMainTitle = this.title.toUpperCase();
        }
        else if(data.url === `/accueil/${this.subjectParams}/${this.qcmParams}`)
        {
          this.urlSubjectTitle = (this.subjects.subjects as {[key: string]: any})[this.subjectParams].urlSubjectTitle;
          this.displayMainTitle = `${this.title} - ${this.subjects.categoryName}`.toUpperCase();
        }
      }
    })
  } 
}
