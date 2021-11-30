import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// export interface Card {
//   title: string
//   text: string
// }

export interface Card {
  id: string
  category_id: string
  name: string
  slug: string
  description: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  toggle = true
  cards: Card[] = []
  // cards: Card[] = [
  //   {title: 'Card 1', text: 'This is card number 1'},
  //   {title: 'This is Card 2', text: 'This is card number 2'},
  //   {title: 'Last Card 3', text: 'This is card number 3'}
  // ]

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getCards(){
    this.http.get<any>('http://localhost:63342/FirstTry/request_to_db.php?Action=получить товары').subscribe(data => {
      this.cards = data;
    })
  }

  toggleCards(){
    this.toggle = !this.toggle
  }
}
