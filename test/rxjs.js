import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const subject = from([1, 2, 2, 3, 4, 5]);

subject.subscribe({
  next: val => { console.log(val) },
  complete: e => { console.log('completed')}
});

subject.pipe(distinctUntilChanged()).subscribe({
  next: val => { console.log(val) },
  complete: e => { console.log('completed')}
});
