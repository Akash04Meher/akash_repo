import { Component } from '@angular/core';

@Component({
  selector: 'app-team7',
  templateUrl: './team7.component.html',
  styleUrls: ['./team7.component.css']
})
export class Team7Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Arpita', image: '', phoneNumber: '9337013957' },
    2: { name: 'Akanksha', image: '', phoneNumber: '8984017981' },
    3: { name: 'Ipsita', image: 'assets/images/Ipsita.jpg', phoneNumber: '8260622107' },
    4: { name: 'Jyoti', image: 'assets/images/Jyoti.jpg', phoneNumber: '7070661808' },
    5: { name: 'Soma', image: '', phoneNumber: '7488185338' },
    6: { name: 'Shoba', image: '', phoneNumber: '1234567890' },
    7: { name: 'Sazia', image: '', phoneNumber: '1234567890' }
  };
}
