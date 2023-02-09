import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

export function useModal() {
    const {modal, open, close} = useContext(ModalContext);
    const [modalData, setModalData] = useState();

    const cardClickHandler = (data:any) => {
        setModalData(data)
        open();
    }

    return {modal, open, close, modalData, cardClickHandler}
}