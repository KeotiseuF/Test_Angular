import { NgModule } from "@angular/core"; // Enregistre tout ce qu'on a crée dans Angular, et les groupe ensemble.
import { Routes, RouterModule } from "@angular/router";

// Composants que j'ai généré puis importer.
import { CoverPageComponent } from "./cover-page/cover-page.component";
import { PresentationPageComponent } from "./presentation-page/presentation-page.component";
import { QcmComponent } from "./qcm/qcm.component";
import { SubjectComponent } from "./subject/subject.component";
import { ResultComponent } from "./result/result.component";

const routes: Routes = [
  { path: "", component: CoverPageComponent },
  { path: "accueil", component: PresentationPageComponent },
  { path: "accueil/three-dimensional", component: SubjectComponent },
  { path: "accueil/programming", component: SubjectComponent },
  { path: "accueil/web-three", component: SubjectComponent },
  { path: "accueil/english", component: SubjectComponent },
  { path: "accueil/ia", component: SubjectComponent },
  { path: "accueil/stock-exchange", component: SubjectComponent },
  { path: "accueil/three-dimensional/modelization", component: QcmComponent},  
  { path: "accueil/three-dimensional/animation", component: QcmComponent},  
  { path: "accueil/three-dimensional/rendering", component: QcmComponent},  
  { path: "accueil/three-dimensional/printers", component: QcmComponent},  
  { path: "accueil/three-dimensional/architecture", component: QcmComponent},  
  { path: "accueil/three-dimensional/product-design", component: QcmComponent},  
  { path: "accueil/three-dimensional/environment", component: QcmComponent},
  { path: "accueil/three-dimensional/modelization/result", component: ResultComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
