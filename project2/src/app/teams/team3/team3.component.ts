import { Component } from '@angular/core';

@Component({
  selector: 'app-team3',
  templateUrl: './team3.component.html',
  styleUrls: ['./team3.component.css']
})
export class Team3Component {
  contactsMap: { [key: number]: { name: string; image: string; phoneNumber: string } } = {
    1: { name: 'Anurag Pradhan', image: 'assets/images/Anurag.jpg', phoneNumber: '8260689967' },
    2: { name: 'Digdarshan', image: '', phoneNumber: '8144523394' },
    3: { name: 'Akash Kumar Meher', image: 'assets/images/Akash.jpg', phoneNumber: '6370144949' },
    4: { name: 'Aswini Kumar Moharana', image: 'assets/images/Aswini.jpg', phoneNumber: '9337095644' },
    5: { name: 'Abhisek Panda', image: 'assets/images/Abhisek.jpg', phoneNumber: '9124295462' },
    6: { name: 'Khushi Singh', image: '', phoneNumber: '6371468262' },
    7: { name: 'Shruti Sudha Padhy', image: '', phoneNumber: '1234567890' }
  };
}
