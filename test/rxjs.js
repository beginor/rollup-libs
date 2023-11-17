import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

const subject = from([1, 2, 2, 3, 4, 5]);

subject.subscribe({
  next: val => { console.log(val) },
  complete: e => { console.log('completed')}
});

subject.pipe(distinctUntilChanged()).subscribe({
  next: val => { console.log(val) },
  complete: e => { console.log('completed')}
});

fromFetch('/importmap.json').subscribe({
  next: res => {
    res.json().then(json => {
      console.log(json);
    });
  }
})
