import {
  Component,
  OnInit,
  ContentChildren,
  AfterContentInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  //Selecionar o tabcomponent
  //anotar o tipo do objeto de retorno para conseguir  buscar o tipo específico
  //no caso do retorno da querylist importado o tipo e declarado o tipo do componente
  //tabs: QueryList<TabComponent>
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    console.log(this.tabs);
  }
}
