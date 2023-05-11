import React, {useState} from 'react';

const Modal = ({detail}) => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div
                onClick={() => setModal(true)}
                className="detail--images">
                <img width={600} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${detail.poster_path}`}
                     alt=""/>
            </div>

            <div
                onClick={() => setModal(false)}
                hidden={!modal} className="blur-modal"/>

            <div hidden={!modal}>
                <div className="modal">
                    <img width={332} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${detail.poster_path}`}
                         alt=""/>
                    <div className="modal-items">
                        <div
                            onClick={() => setModal(false)}
                            className="modal-items_close">&times;</div>
                        <h3 className="modal-items_title">{detail.title}</h3>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal;