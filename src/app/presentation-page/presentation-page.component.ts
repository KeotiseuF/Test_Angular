import { Component, OnInit } from '@angular/core';
import { Subjects } from '../services/subjects.service';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss']
})

export class PresentationPageComponent implements OnInit {
  
  constructor ( private subjects: Subjects ) {}

  onDisplayCategory(e: number) {
    this.subjects.selectId(e)
  } 
  
  ngOnInit() {
  }
}
