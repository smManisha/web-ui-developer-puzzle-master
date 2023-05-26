import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, markFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  flag:false;
  

  constructor(private readonly store: Store) {}
  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }
  markBookAsFinished(item) {
    this.store.dispatch(markFromReadingList({ item }));
  }
}
