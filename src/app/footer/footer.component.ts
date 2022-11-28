import { Component, OnInit } from "@angular/core";
import { FetchdataServiceService } from "../fetchdata-service.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  providers: [FetchdataServiceService],
})
export class FooterComponent implements OnInit {
  Url = "https://catfact.ninja/fact";

  constructor(private srv: FetchdataServiceService) {}

  getPost() {
    this.srv.getData(this.Url).subscribe((data) => {
      const footer = document.getElementsByTagName("footer");
      const selectData = Object.values(data)[0];

      const youKnow = document.createElement("h2");
      youKnow.innerHTML = "Saviez-vous ?";
      footer[0].appendChild(youKnow);

      const anecdote = document.createElement("p");
      anecdote.setAttribute("id", "anecdote");
      anecdote.innerHTML = `${selectData}`;
      footer[0].appendChild(anecdote);
    });
  }

  ngOnInit() {
    this.getPost();
  }
}
