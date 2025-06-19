import { Component } from '@angular/core';

@Component({
  selector: 'app-team8',
  templateUrl: './team8.component.html',
  styleUrls: ['./team8.component.css']
})
export class Team8Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Ashish Pradhan', image: '', phoneNumber: '9776350325' },
    2: { name: 'Pritam', image: '', phoneNumber: '7008066749' },
    3: { name: 'Parth', image: '', phoneNumber: '1234567890' },
    4: { name: 'Ashish', image: '', phoneNumber: '8249609193' },
    5: { name: 'Tushar', image: '', phoneNumber: '1234567890' },
    6: { name: 'Aryan', image: '', phoneNumber: '7870088436' }
  };
}
