import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-the-top',
  templateUrl: './to-the-top.component.html',
  styleUrls: ['./to-the-top.component.scss']
})

export class ToTheTopComponent {

  constructor(private router: Router) { }

  onToTheTop() {
    window.scrollTo(0, 0);
  }
}

