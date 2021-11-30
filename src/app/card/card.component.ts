import {Component, Input, OnInit} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent{
  @Input() index!: number
  @Input() card!: Card

  title = 'My Card Title'
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad assumenda delectus ducimus exercitationem iste mollitia quisquam rem sunt ullam.'
  textColor: string = ''

  cardDate: Date = new Date()

  changeTitle() {
    this.card.name = 'Title has been changed!'
  }

  // inputHandler(value:any){
  //   this.title = value
  // }
}
