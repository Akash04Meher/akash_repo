import { Component } from '@angular/core';

@Component({
  selector: 'app-team6',
  templateUrl: './team6.component.html',
  styleUrls: ['./team6.component.css']
})
export class Team6Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Rohan', image: 'assets/images/Rohan.jpg', phoneNumber: '9692626278' },
    2: { name: 'Smruti', image: 'assets/images/Smruti.jpg', phoneNumber: '7326881559' },
    3: { name: 'Sneha', image: '', phoneNumber: '9938066917' },
    4: { name: 'Pratibha', image: '', phoneNumber: '1234567890' },
    5: { name: 'Subhalaxmi', image: 'assets/images/Subhalaxmi.jpg', phoneNumber: '6370546969' }
  };
}
