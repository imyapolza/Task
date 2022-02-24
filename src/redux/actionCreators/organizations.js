import {
  ADD_ORGANIZATION,
  DELETE_ORGANIZATION,
  EDIT_ORGANIZATION,
  SET_ORGANIZATIONS,
} from '../reducers/organizations.js';

export const setOrganizations = (organizations) => ({
  type: SET_ORGANIZATIONS,
  payload: organizations,
});

export const editOrganization = (organizationData) => ({
  type: EDIT_ORGANIZATION,
  payload: organizationData,
});

export const addOrganization = (organizationData) => ({
  type: ADD_ORGANIZATION,
  payload: organizationData,
});

export const deleteOrganization = (organizationId) => ({
  type: DELETE_ORGANIZATION,
  payload: organizationId,
});
