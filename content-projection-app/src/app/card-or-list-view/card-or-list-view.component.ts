import { Component, OnInit, Input,ContentChild, TemplateRef } from '@angular/core';
import {CardItemDirective} from './directives/card-item.directive';
import {ListItemDirective} from './directives/list-item.directive';
@Component({
  selector: 'app-card-or-list-view',
  templateUrl: './card-or-list-view.component.html'
  // styleUrls: ['./card-or-list-view.component.css']
})
export class CardOrListViewComponent implements OnInit {

  @Input() items: {
    header: string,
    content: string
  }[] = [];

  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate;
  constructor() { }

  ngOnInit(): void {
  }

}
