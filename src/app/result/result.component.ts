import { Component } from '@angular/core';
import { ModelizationQcm } from '../services/modelization-qcm.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  constructor(private modelizationQcm: ModelizationQcm){}

  wrongResponses = this.modelizationQcm.wrongResponses;
}
