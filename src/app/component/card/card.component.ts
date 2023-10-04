import { Component, Output, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() text:any
  @Input() title:any
  @Input() withTitle:any
}
