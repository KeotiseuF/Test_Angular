import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModelizationQcm } from '../services/modelization-qcm.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subjects } from '../services/subjects.service';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.scss']
})

export class QcmComponent implements OnInit {
  qcm!: any;
  buttonText = "Validé";
  displayValidButton = true;
  numberQuestion = 1;
  randomQuestion!: number; 
  idQuestion!: number;
  disabledButton = true;
  disabledInputOne = false;
  disabledInputTwo = false;
  disabledInputThree = false;
  choice!: number;
  answer!: number;

  @ViewChild("colorCheckOne") colorCheckOne!: ElementRef;
  @ViewChild("colorCheckTwo") colorCheckTwo!: ElementRef;
  @ViewChild("colorCheckThree") colorCheckThree!: ElementRef;

  constructor ( 
    private modelizationQcm: ModelizationQcm, 
    private location: Location, 
    private router: Router,
    private subjects: Subjects, 
    private activeRoute: ActivatedRoute,
  ){}
  
  ngOnInit(): void
  {
    this.randomQuestion = Math.floor(Math.random() * (this.modelizationQcm.qcm.length)) + 1;
    this.qcm = this.modelizationQcm.qcm;
    this.subjects.qcmParams = this.activeRoute.snapshot.params["titleQcm"];
  }

  onActiveButton(checkOne: HTMLInputElement, checkTwo: HTMLInputElement, checkThree: HTMLInputElement, choice = 1 | 2 | 3, selectQcm: any)
  {
    
    this.answer = selectQcm.answer;
    this.choice = choice;

    if(checkOne.checked)
    {
      this.disabledInputTwo = true;
      this.disabledInputThree = true;
      this.disabledButton = false;
    }
    else if(checkTwo.checked)
    {
      this.disabledInputOne = true;
      this.disabledInputThree = true;
      this.disabledButton = false;
    }
    else if(checkThree.checked)
    {
      this.disabledInputOne = true;
      this.disabledInputTwo = true;
      this.disabledButton = false;
    }
    else
    {
      this.disabledInputOne = false;
      this.disabledInputTwo = false;
      this.disabledInputThree = false;
      this.disabledButton = true;
    }
  }

  onValidAnswer()
  {  
    this.disabledInputOne = true;
    this.disabledInputTwo = true;
    this.disabledInputThree = true;
    this.buttonText = "Suivant";
    this.displayValidButton = false;
    this.idQuestion = this.randomQuestion;

    if(this.numberQuestion === 10)
    {
      this.buttonText = "Résultat";
    }
    
    if(this.choice !== this.answer)
    {
      this.modelizationQcm.wrongResponses++;
      
      if(this.choice === 1)
      {
        this.colorCheckOne.nativeElement.style.color = "#ff4f4f";
      }
      else if(this.choice === 2)
      {
        this.colorCheckTwo.nativeElement.style.color = "#ff4f4f";
      }
      else if(this.choice === 3)
      {
        this.colorCheckThree.nativeElement.style.color = "#ff4f4f";
      }
      if(this.answer === 1)
      {
        this.colorCheckOne.nativeElement.style.color = "#60ff60";
      }
      else if(this.answer === 2)
      {
        this.colorCheckTwo.nativeElement.style.color = "#60ff60";
      }
      else if(this.answer === 3)
      {
        this.colorCheckThree.nativeElement.style.color = "#60ff60";
      }
    }
    else
    {
      if(this.choice === 1)
      {
        this.colorCheckOne.nativeElement.style.color = "#60ff60";
      }
      else if(this.choice === 2)
      {
        this.colorCheckTwo.nativeElement.style.color = "#60ff60";
      }
      else if(this.choice === 3)
      {
        this.colorCheckThree.nativeElement.style.color = "#60ff60";
      }
    }
  }

  onNextQuestion()
  {
    this.numberQuestion++;
    this.randomQuestion = Math.floor(Math.random() * (this.modelizationQcm.qcm.length)) + 1;
    this.disabledInputOne = false;
    this.disabledInputTwo = false;
    this.disabledInputThree = false;
    this.buttonText = "Validé";
    this.displayValidButton = true; 
    this.disabledButton = true;

    if(this.idQuestion === this.randomQuestion)
    {
      this.randomQuestion = Math.floor(Math.random() * (this.modelizationQcm.qcm.length)) + 1;
    }

    if(this.numberQuestion === 11)
    {
      this.router.navigate(["result"], {relativeTo: this.activeRoute})
    }
  }
}
