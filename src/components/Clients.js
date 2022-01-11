// NOTE:
// TRY TO USE FUNCTIONAL COMPONENT ->
// MAP DISPATCH TO PROPS TO GET ALL CLIENT DATA ->
// MAP OVER AND DISPLAY IN LIST ->
// IMPORT THIS CLIENTS COMPONENT INTO MAIN APP ->
// REPEAT ALL STEPS ABOVE FOR SKILLS COMPONENT :)

//---------------------------------------------

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Clients = ({ clients }) => {
  console.log('YOOO', clients);
  return (
    <div>
      <h2>---CLIENTS---</h2>
      {clients.clients.map((client) => {
        return (
          <h4 key={client.id}>
            {/* <Link to={`/client/${client.id}`}> */}
            {client.name}
            {/* </Link> */}
          </h4>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         clients: ()=> dispatch(getClients())
//     }
// }
export default connect(mapStateToProps)(Clients);
