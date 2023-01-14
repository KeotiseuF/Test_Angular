import { NgModule } from "@angular/core"; // Enregistre tout ce qu'on a crée dans Angular, et les groupe ensemble.
import { Routes, RouterModule } from "@angular/router";

// Composants que j'ai généré puis importer.
import { CoverPageComponent } from "./cover-page/cover-page.component";
import { PresentationPageComponent } from "./presentation-page/presentation-page.component";
import { QcmComponent } from "./qcm/qcm.component";
import { SubjectComponent } from "./subject/subject.component";
import { ResultComponent } from "./result/result.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const routes: Routes = [
  { path: "", component: CoverPageComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "accueil", component: PresentationPageComponent },
  { path: "accueil/:titleSubject", component: SubjectComponent },
  { path: "accueil/:titleSubject/:titleQcm", component: QcmComponent },
  { path: "accueil/:titleSubject/:titleQcm/result", component: ResultComponent },
  { path: "**", component: ErrorPageComponent, data: {message: "Erreur 404"} },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
