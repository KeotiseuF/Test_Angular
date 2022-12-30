import { Component, OnInit, OnDestroy } from "@angular/core"; // Importe un composant et un hook.
import { interval, tap, Subject, takeUntil } from "rxjs";
import { FetchdataServiceService } from "../fetchdata-service.service"; // Importe un service qui gère les requêtes.
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-footer", // Nom du composant.
  templateUrl: "./footer.component.html", // HTML du composant.
  styleUrls: ["./footer.component.scss"], // SCSS du composant.
  providers: [FetchdataServiceService], // Rend le service exploitable.
})

// Classe qui affiche mon footer.
export class FooterComponent implements OnInit, OnDestroy {
  Url = "https://catfact.ninja/fact"; // Url à la quelle je vais faire une requête. 

  constructor(private srv: FetchdataServiceService, private router : Router) {} // Injecte HttpClient 

  destroy$!: Subject<boolean>; // Création d'un Observable subject. 
  anecdote!: any;
  displayFooter!: string;  

  // Fonction qui envoie une requête get et avec la réponse construit le footer.    
  getPost() {
    this.srv.getData(this.Url).subscribe((data) => {
      this.anecdote = Object.values(data)[0];
    });
  }

  // Exécute la fonction getPost pour afficher les données du footer et l'actualise toutes les 8 secondes en faisant une nouvelle requête.
  ngOnInit() {
    this.router.events.subscribe( data => {
      if(data instanceof NavigationEnd)
      {
        this.displayFooter = data.url
      }
    })
    
    this.destroy$ = new Subject<boolean>(); 
    this.getPost()
     interval(8000).pipe(

    // Tap est un effet secondaire qui manipule les émissions d'un Observable sans les modifier.  
      tap(() => {
        this.getPost()
      }),
      takeUntil(this.destroy$)
    ).subscribe() 
  }

  // Emettra true lors de la destruction du component, ce qui évitera les fuites de données. 
  ngOnDestroy()
  {
    this.destroy$.next(true);
  }
}
