import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, addToReadingList } from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from '@tmo/shared/models';
@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(
    private readonly store: Store,
    private _snackBar: MatSnackBar,
    ) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    let snackBarRef = this._snackBar.open(`${item.title} is removed from Reading List`, 'Undo', {
      duration: 3000
    });
    let book:Book = item;
    snackBarRef.onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({ book }));
   });
  }
}
