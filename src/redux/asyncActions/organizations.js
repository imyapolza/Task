import { api } from "../../api/index.js";
import { editOrganization } from "../actionCreators/organizations.js";

export const setOrganizationByINN = ({ id, inn }) => {
  return (dispatch) => {
    return api
      .post("/findById/party", {
        query: inn,
      })
      .then(
        (response) => {
          const organizationData = response.data.suggestions[0];

          if (!organizationData) {
            alert('Not found organization with given inn');
            return;
          }

          const {
            value: name,
            data: {
              inn,
              ogrn,
              address: { value: addressValue },
              state: { registration_date },
            },
          } = organizationData;

          dispatch(
            editOrganization({
              id,
              name,
              inn,
              ogrn,
              address: addressValue,
              createdAt: new Date(registration_date).toISOString(),
            })
          );
        },
        (error) => {
          console.error(error);
        }
      );
  };
};
