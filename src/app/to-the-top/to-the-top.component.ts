import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-the-top',
  templateUrl: './to-the-top.component.html',
  styleUrls: ['./to-the-top.component.scss']
})

export class ToTheTopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void
  {
    
  }     

  onToTheTop() {
    window.scrollTo(0, 0);
  }
}

