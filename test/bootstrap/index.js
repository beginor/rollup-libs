import { Modal } from 'bootstrap';
document.getElementById('btnModal')?.addEventListener('click', e => {
    const modal = new Modal(document.getElementById('modal'), { backdrop: true });
    modal.show();
});
//# sourceMappingURL=index.js.map