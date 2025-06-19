import { Component } from '@angular/core';

@Component({
  selector: 'app-team5',
  templateUrl: './team5.component.html',
  styleUrls: ['./team5.component.css']
})
export class Team5Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Chinmay', image: '', phoneNumber: '1234567890' },
    2: { name: 'Aditya', image: '', phoneNumber: '6370580810' },
    3: { name: 'Satyajit', image: '', phoneNumber: '1234567890' },
    4: { name: 'Subhransu', image: '', phoneNumber: '9861051168' },
    5: { name: 'Rakesh', image: 'assets/images/Rakesh.jpg', phoneNumber: '7606093416' },
    6: { name: 'Anwesha', image: '', phoneNumber: '9556907230' },
    7: { name: 'Lopamudra', image: 'assets/images/Lopamudra.jpg', phoneNumber: '6370848430' },
    8: { name: 'Sonali', image: '', phoneNumber: '7735460565'}
  };
}
