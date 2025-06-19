import { Component } from '@angular/core';

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.css']
})
export class Team2Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Dishant', image: 'assets/images/Dishant.jpg', phoneNumber: '8984097022' },
    2: { name: 'Girija', image: 'assets/images/Girija.jpg', phoneNumber: '9668498430' },
    3: { name: 'Shruti Arya', image: '', phoneNumber: '1234567890' },
    4: { name: 'Chinmayee', image: '', phoneNumber: '9937747926' },
    5: { name: 'Swastik', image: '', phoneNumber: '7978968913' },
    6: { name: 'Khushi', image: '', phoneNumber: '8144849181' },
    7: { name: 'Roshni', image: '', phoneNumber: '8339812725' },
    8: { name: 'Athar', image: '', phoneNumber: '6371683902'}
  };
}
