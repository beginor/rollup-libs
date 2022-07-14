import { Modal } from 'bootstrap';

document.getElementById('btnModal')?.addEventListener('click', e => {
    const modal = new Modal(
        document.getElementById('modal') as HTMLElement,
        { backdrop: true }
    );
    modal.show();
});
