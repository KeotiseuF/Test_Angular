import { Component, OnInit } from '@angular/core';
import { ModelizationQcm } from '../services/modelization-qcm.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  wrongResponses = 10 - this.modelizationQcm.wrongResponses;
  message!: string; 

  constructor(private modelizationQcm: ModelizationQcm){}

  ngOnInit(): void
  {
    if( this.wrongResponses >= 8 )
    {
      this.message = `Tu as été aussi perspicace qu'Eren lors de sa transformation en Titan dans ce QCM, 
      et cela a payé ! Félicitations pour ton excellent score.`
    }
    else if( this.wrongResponses >= 5 )
    {
      this.message = `Tu as presque été aussi précis mais autant déterminé qu'un membre de l'escouade d'exploration dans ce QCM, 
      continue comme cela! Félicitations pour ton score.`
    }
    else
    {
      this.message = `Ne sois pas découragé par ton score dans ce QCM, tu as encore de nombreuses opportunités pour t'améliorer et 
      devenir un combattant redoutable comme Mikasa. 
      Félicitations pour ta détermination et ta motivation à apprendre.`
    }
  }

  onResetWrongResponses()
  {
    this.wrongResponses = 0;
  }
}
