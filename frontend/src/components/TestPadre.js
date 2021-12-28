import Test from "./Test"
import {connect} from "react-redux"
import React, {useState, useEffect} from "react"
import authAction from "../redux/actions/authActions"

function TestPadre(props) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    props.personas === "" && props.getUsers(props.user._id)
    props.personas.length > 0 && setLoading(false)
    props.getMatchUsers(props.user)
  }, [props.personas])

  return (
    <div>
      {loading && props.personas === "" && props.user._id ? (
        <h1>Loading...</h1>
      ) : (
        <Test
          personas={props.personas}
          user={props.user}
          match={props.match}
          matchsAndDismatchs={props.matchsAndDismatchs}
        />
      )}
      <button
        onClick={() =>
          props.newConversation(props.user._id, props.personas[2]._id)
        }
      >
        Conversacion
      </button>
    </div>
  )
}

const mapDispatchToProps = {
  getMatchUsers: authAction.getMatchUsers,
  getUsers: authAction.getUsers,
  matchsAndDismatchs: authAction.matchsAndDismatchs,
  match: authAction.match,
  newConversation: authAction.newConversation,
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    test: state.authReducer.test,
    personas: state.authReducer.all,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPadre)
