export const ADD_ORGANIZATION = 'ADD_ORGANIZATION';
export const EDIT_ORGANIZATION = 'EDIT_ORGANIZATION';
export const DELETE_ORGANIZATION = 'DELETE_ORGANIZATION';
export const SET_ORGANIZATIONS = 'SET_ORGANIZATIONS';

const initialState = {
  organizations: [
    {
      id: '1',
      name: 'Имя 1',
      address: 'City 1 street 1',
      inn: 2801068082,
      ogrn: 1234567890123,
      createdAt: '2022-02-23T21:36:09.151Z',
    },
    {
      id: '2',
      name: 'Имя 2',
      address: 'City 2 street 2',
      inn: 3812129028,
      ogrn: 1234567890124,
      createdAt: '2022-02-23T21:36:23.028Z',
    },
    {
      id: '3',
      name: 'Имя 3',
      address: 'City 3 street 3',
      inn: 7751002741,
      ogrn: 1234567890125,
      createdAt: '2022-02-23T21:36:39.185Z',
    },
    {
      id: '4',
      name: 'Имя 4',
      address: 'City 4 street 4',
      inn: 6163218050,
      ogrn: 1234567890126,
      createdAt: '2022-02-23T21:36:57.744Z',
    },
  ],
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload,
      };

    case ADD_ORGANIZATION:
      return {
        ...state,
        organizations: [...state.organizations, action.payload],
      };

    case EDIT_ORGANIZATION:
      const updated = state.organizations.map((o) => {
        if (o.id === action.payload.id) {
          return action.payload;
        }

        return o;
      });

      return {
        ...state,
        organizations: updated,
      };

    case DELETE_ORGANIZATION:
      return {
        ...state,
        organizations: state.organizations.filter((o) => o.id !== action.payload),
      };

    default:
      return state;
  }
};

export default contacts;
