import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitTestServiceService {

  constructor() { }

  getUsers(): Array<{}> {
    return [
        {
            name: 'user1',
            surname: 'usersurname1'
        }
    ];
}

}
