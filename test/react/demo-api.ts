import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';

const subject = new Subject<string>();
export const messageService = {
    sendMessage: (message: string) => subject.next(message),
    clearMessage: () => subject.next(''),
    onMessage: () => subject.asObservable()
};
