import { Component } from '@angular/core';

@Component({
  selector: 'app-team1',
  templateUrl: './team1.component.html',
  styleUrls: ['./team1.component.css']
})
export class Team1Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Biswa Prachurjya', image: '', phoneNumber: '1234567890' },
    2: { name: 'Pradipta', image: 'assets/images/Pradipta.jpg', phoneNumber: '9692203242' },
    3: { name: 'Nitin', image: '', phoneNumber: '9439929404' },
    4: { name: 'Dibyesh', image: 'assets/images/Dibyesh.jpg', phoneNumber: '9692197124' },
    5: { name: 'Ashutosh', image: 'assets/images/Ashutosh.jpg', phoneNumber: '8260730899' },
  };
}
