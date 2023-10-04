import { Component, Input } from '@angular/core';

@Component({
  selector: 'visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent {
  @Input() image: any
  @Input() date: any
  @Input() time: any
  @Input() location: any
}
