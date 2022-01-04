import axios from "axios";
import BASE_URL from "../api/baseUrl";
import { types } from "../constants/actionTypes";

const INITIAL_STATE = {
    citas: {
        lista: [],
        nombre: ''
    }
}


export default function citasReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case types.GET_ALL:
            return {
                ...state, citas: {
                    lista: action.payload,
                    nombre: ''
                }

            }
            case types.GET_BY_ID:
                return {
                    ...state, citas: {
                        lista: action.payload,
                        nombre: ''
                    }
                }

            case types.INITIAL:
                return INITIAL_STATE;

            default:
                return state;
    }

}

export const getAllAction = () => async (dispatch, getState) => {
    try {

        const response = await axios.get(BASE_URL + 'citasReactivas');
        console.log(response)

        dispatch({
            type: types.GET_ALL,
            payload: response.data
        })

    } catch (error) {
        console.error(error)
        dispatch({
            type: types.INITIAL_STATE,
        })
    }
}

export const getByNameAction = (id) => async (dispatch, getState) => {
    try {
        const response = await axios.get(BASE_URL + `citasReactivas/${id}/byidPaciente`)
        console.log(response)
        dispatch({
            type: types.GET_BY_ID,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: types.INITIAL_STATE,
        })
    }
}