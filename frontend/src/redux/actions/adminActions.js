import axios from "axios"
import {toast} from "react-toastify"

const adminAction = {
  setPersonas: (type) => {
    return (dispatch, getState) => {
      const all = getState().authReducer.all
      dispatch({
        type: type === "ASC" ? "ASC" : type === "DES" ? "DES" : "DEFAULT",
        payload: all,
      })
    }
  },
  deletePeople: (id, type) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token")

      const all = await axios.put(
        "https://itindev-mindhub.herokuapp.com/api/admin/deleteUser/" + id,
        {type},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      dispatch({
        type: "ALL",
        payload: all.data,
      })
    }
  },
  editPeople: (id, edit) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token")

      const all = await axios.put(
        "https://itindev-mindhub.herokuapp.com/api/admin/editUser/" + id,
        {
          ...edit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      dispatch({
        type: "ALL",
        payload: all.data,
      })
    }
  },

  banPeople: (id) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token")

      const all = await axios.put(
        "https://itindev-mindhub.herokuapp.com/api/admin/ban/" + id,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      dispatch({
        type: "ALL",
        payload: all.data,
      })
    }
  },
  giveRemoveAdmin: (id) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token")

      const all = await axios.put(
        "https://itindev-mindhub.herokuapp.com/api/admin/giveRemoveAdmin/" + id,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(all)
      dispatch({
        type: "ALL",
        payload: all.data,
      })
    }
  },
  filterPeople: (search) => {
    return (dispatch, getState) => {
      const all = getState().authReducer.all

      dispatch({type: "SEARCH", payload: {all, search}})
    }
  },
}
export default adminAction
