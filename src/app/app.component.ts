import { Component } from '@angular/core';
import { UnitTestServiceService } from './unit-test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Edu-Module7-App';
  users: any;
  constructor(private unitTestServiceService: UnitTestServiceService) {
    this.users = this.unitTestServiceService.getUsers();
  }

}
