import { Component, Injectable } from '@angular/core';
import { Subjects } from '../services/subjects.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})

@Injectable({
  providedIn : "root",
})

export class SubjectComponent {
  
  constructor(private subjects : Subjects){};
  
  id = this.subjects.num;
  categories : any = this.subjects.subjects[this.id].categories;
  onDisplayQcm(categoryName: string, categoryUrl: string)
  {
    this.subjects.categoryName = categoryName;
    this.subjects.categoryUrl = categoryUrl
  }
}