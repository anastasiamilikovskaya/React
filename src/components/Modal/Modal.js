import { createPortal } from 'react-dom';

import './Modal.scss';

export const Modal = () =>
    createPortal(
        <div className="backdrop">
            <div className="modal">Modal</div>
        </div>,
        document.getElementById('portal-root')
    );
