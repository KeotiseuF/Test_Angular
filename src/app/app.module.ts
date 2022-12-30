import { NgModule } from "@angular/core"; // Enregistre tout ce qu'on a crée dans Angular, et les groupe ensemble.
import { BrowserModule } from "@angular/platform-browser"; // Import l'infrastructure requise pour mon application.
import { HttpClientModule } from "@angular/common/http"; // Permet de communiquer avec un client.

// Composants que j'ai généré puis importer.
import { AppComponent } from "./app.component";
import { CoverPageComponent } from "./cover-page/cover-page.component";
import { PresentationPageComponent } from "./presentation-page/presentation-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ToTheTopComponent } from './to-the-top/to-the-top.component';
import { SubjectComponent } from './subject/subject.component';
import { Subjects } from "./services/subjects.service";
import { ModelizationQcm } from "./services/modelization-qcm.service";
import { QcmComponent } from './qcm/qcm.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverPageComponent,
    PresentationPageComponent,
    HeaderComponent,
    FooterComponent,
    ToTheTopComponent,
    SubjectComponent,
    QcmComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [Subjects, ModelizationQcm],
  bootstrap: [AppComponent], 
})
export class AppModule {}
