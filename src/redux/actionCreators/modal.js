import { HIDE_MODAL, SHOW_MODAL } from '../reducers/modal.js';

export const showModal = ({ modalType, modalProps }) => {
  return {
    type: SHOW_MODAL,
    payload: { modalType, modalProps },
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
