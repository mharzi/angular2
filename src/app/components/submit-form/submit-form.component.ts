import { Component } from '@angular/core';

import {Submissions} from '../../model/submissions.model';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  submissions = new Submissions(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newSubmissions(){
    this.submissions = new Submissions(42, '', '','');
  }

}
