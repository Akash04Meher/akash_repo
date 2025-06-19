import { Component } from '@angular/core';

@Component({
  selector: 'app-team4',
  templateUrl: './team4.component.html',
  styleUrls: ['./team4.component.css']
})
export class Team4Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Abhay', image: '', phoneNumber: '1234567890' },
    2: { name: 'Mukund', image: '', phoneNumber: '9470385804' },
    3: { name: 'Soumya', image: '', phoneNumber: '6372302299' },
    4: { name: 'Roshan', image: 'assets/Roshan.jpg', phoneNumber: '8260577368' },
    5: { name: 'Subham', image: '', phoneNumber: '1234567890' },
    6: { name: 'Ayashkant', image: 'assets/images/Ayashkant.jpg', phoneNumber: '9124419390' },
    7: { name: 'Ritisha', image: 'assets/images/Ritisha.jpg', phoneNumber: '9853588208' },
    8: { name: 'Anant', image: 'assets/images.Anant.jpg', phoneNumber: '8144065588'},
    9: { name: 'Ranak', image: '', phoneNumber: '9337810312'}
  };
}
