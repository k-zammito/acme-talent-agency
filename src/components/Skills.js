import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Skills = ({ skills }) => {
  console.log('YOOO', skills);
  return (
    <div>
      <h2>---SKILLS---</h2>
      {skills.skills.map((skill) => {
        return (
          <h4 key={skill.id}>
            {/* <Link to={`/client/${client.id}`}> */}
            {skill.name} ({skills.length}){/* </Link> */}
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
export default connect(mapStateToProps)(Skills);
