import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  headerTemplate: TemplateRef<any>;
}
