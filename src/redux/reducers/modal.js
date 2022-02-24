export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
  modalType: null,
  modalProps: {},
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      const { modalType, modalProps } = action.payload;

      return {
        ...state,
        modalType,
        modalProps,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalType: null,
        modalProps: {},
      };
    default:
      return state;
  }
};

export default modal;
