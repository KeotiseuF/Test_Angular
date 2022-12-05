import { NgModule } from "@angular/core"; // Enregistre tout ce qu'on a crée dans Angular, et les groupe ensemble.
import { Routes, RouterModule } from "@angular/router";

// Composants que j'ai généré puis importer.
import { CoverPageComponent } from "./cover-page/cover-page.component";
import { PresentationPageComponent } from "./presentation-page/presentation-page.component";
import { ExperienceComponent } from "./experience/experience.component";
const routes: Routes = [
  { path: "", component: CoverPageComponent },
  { path: "accueil", component: PresentationPageComponent },
  { path: "accueil/experience/:id", component: ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
