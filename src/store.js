import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {
  clients: [],
  skills: [],
  clientSkills: [],
};

//----------ACTIONS-----------

const GET_CLIENTS = 'GET_CLIENTS';
const GET_SKILLS = 'GET_SKILLS';
const GET_CLIENT_SKILLS = 'GET_CLIENT_SKILLS';
const ADD_CLIENT_SKILL = 'ADD_CLIENT_SKILL';
const UPDATE_SKILL = 'UPDATE_SKILL';
const DELETE_CLIENT_SKILL = 'DELETE_CLIENT_SKILL';

//----------ACTION CREATORS----------

const _getClients = (clients) => {
  return {
    type: GET_CLIENTS,
    clients,
  };
};

const _getSkills = (skills) => {
  return {
    type: GET_SKILLS,
    skills,
  };
};

const _getClientSkills = (clientSkills) => {
  return {
    type: GET_CLIENT_SKILLS,
    clientSkills,
  };
};

const _addClientSkill = (clientSkill) => {
  return {
    type: ADD_CLIENT_SKILL,
    clientSkill,
  };
};

const _updateSkill = (skill) => {
  return {
    type: UPDATE_SKILL,
    skill,
  };
};

const _deleteClientSkill = (clientSkill) => {
  return {
    type: DELETE_CLIENT_SKILL,
    clientSkill,
  };
};

//----------THUNKS----------

export const getClients = () => {
  return async (dispatch) => {
    const clients = (await axios.get('/api/clients')).data;
    dispatch(_getClients(clients));
  };
};

export const getSkills = () => {
  return async (dispatch) => {
    const skills = (await axios.get('/api/skills')).data;
    dispatch(_getSkills(skills));
  };
};

export const getClientSkills = () => {
  return async (dispatch) => {
    const clientSkills = (await axios.get('/api/clientskills')).data;
    dispatch(_getClientSkills(clientSkills));
  };
};

export const addClientSkill = (clientSkill) => {
  return async (dispatch) => {
    clientSkill = (await axios.post('/api/clientskills', clientSkill)).data;
    dispatch(_addClientSkill(clientSkill));
  };
};

export const updateSkill = (skill, history) => {
  return async (dispatch) => {
    skill = (await axios.put(`/api/skills/${skill.id}`, skill)).data;
    dispatch(_updateSkill(skill));
    history.push('/');
  };
};

export const deleteClientSkill = (clientSkill) => {
  return async (dispatch) => {
    await axios.delete(`/api/skills/${clientSkill.id}`);
    dispatch(_deleteClientSkill(clientSkill.id));
  };
};

//----------REDUCER----------

const clients = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.clients,
      };
    default:
      return state;
  }
};

const skills = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {
        ...state,
        skills: action.skills,
      };
    case UPDATE_SKILL: // if new skill id === orignal id, replace original skill with new skill
      return state.map((skill) =>
        skill.id === action.skill.id ? action.skill : skill
      );
    default:
      return state;
  }
};

const clientSkills = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENT_SKILLS:
      return action.clientSkills;
    case ADD_CLIENT_SKILL:
      return [...state, action.clientSkill];
    case DELETE_CLIENT_SKILL:
      return state.filter(
        (clientSkill) => clientSkill.id !== action.clientSkill.id
      );
    default:
      return state;
  }
};

const reducer = combineReducers({
  clients,
  skills,
  clientSkills,
});

//----------STORE----------

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
