import { Component, Injectable, OnInit } from '@angular/core';
import { Subjects } from '../services/subjects.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})

@Injectable({
  providedIn : "root",
})

export class SubjectComponent implements OnInit{
  
  constructor(private subjects: Subjects, private router: Router, private activeRoute: ActivatedRoute){};
  
  paramsNameSubject = this.router.url.slice(9) 

  categories = (this.subjects.subjects as { [key: string]: any })[this.paramsNameSubject].categories;
  
  ngOnInit() {
    this.subjects.subjectParams = this.activeRoute.snapshot.params["titleSubject"]
  }

  onDisplayQcm(categoryName: string, categoryUrl: string)
  {
    this.subjects.categoryName = categoryName;
    this.subjects.categoryUrl = categoryUrl;
  }
}