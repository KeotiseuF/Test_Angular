import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  // Fcous le boutton accueil si la page présentation est affiché.
  ngOnInit() {
    const pagePresentation =
      document.getElementsByClassName("page_presentation");
    const displayExperiences = document.getElementById("experiences_button");
    const pageExperience = document.getElementsByName("page_experience");
    const experience = document.getElementsByClassName("experience");
    const nav = document.getElementById("button_accueil");
    const getValueLocal = localStorage.getItem("experience");

    if (pagePresentation[0] !== undefined) {
      nav!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
    } else if (pageExperience !== undefined && getValueLocal === "one") {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[0]!.setAttribute("style", "color: #2bd34f;");
    } else if (pageExperience !== undefined && getValueLocal === "two") {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[1]!.setAttribute("style", "color: #2bd34f;");
    } else if (pageExperience !== undefined && getValueLocal === "three") {
      displayExperiences!.setAttribute(
        "style",
        "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
      );
      experience[2]!.setAttribute("style", "color: #2bd34f;");
    }
  }

  onDisplayExperiences() {
    const displayExperiences = document.getElementById("experiences_button");
    const nav = document.getElementById("button_accueil");
    displayExperiences!.setAttribute(
      "style",
      "overflow:initial; background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
    );
    nav!.setAttribute("style", "background: none;");
  }

  onDisplayAccueil() {
    const displayExperiences = document.getElementById("experiences_button");
    const nav = document.getElementById("button_accueil");
    displayExperiences!.setAttribute(
      "style",
      "overflow:hidden; background: none;"
    );
    nav!.setAttribute(
      "style",
      "background: linear-gradient(to bottom, #ffc107 0%, #ffeb3b 75%);"
    );
  }

  onDisplayExperienceOne() {
    const pagePresentation =
      document.getElementsByClassName("page_presentation");
    localStorage.setItem("experience", "one");
    if (pagePresentation.length === 0) {
      location.reload();
    }
  }

  onDisplayExperienceTwo() {
    localStorage.setItem("experience", "two");
    const pagePresentation =
      document.getElementsByClassName("page_presentation");
    if (pagePresentation.length === 0) {
      location.reload();
    }
  }

  onDisplayExperienceThree() {
    localStorage.setItem("experience", "three");
    const pagePresentation =
      document.getElementsByClassName("page_presentation");
    if (pagePresentation.length === 0) {
      location.reload();
    }
  }
}
