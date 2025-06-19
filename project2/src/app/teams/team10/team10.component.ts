import { Component } from '@angular/core';

@Component({
  selector: 'app-team10',
  templateUrl: './team10.component.html',
  styleUrls: ['./team10.component.css']
})
export class Team10Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Aditya Sharma', image: 'assets/images/Aditya.jpg', phoneNumber: '9279661127' },
    2: { name: 'Trisha Jana', image: 'assets/images/Trisha.jpg', phoneNumber: '8102744063' },
    3: { name: 'Swetalina Dhalbisoi', image: '', phoneNumber: '8249907353' },
    4: { name: 'Pratyush Kumar', image: 'assets/images/Pratyush.jpg', phoneNumber: '8480699957' },
    5: { name: 'Pratyush', image: '', phoneNumber: '979810259' },
  };
}
