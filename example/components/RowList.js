import React from 'preact';
import {table} from '../smart-table-preact';
const {h} = React;

function Row ({value}) {
  const {name:{first:firstName, last:lastName}, gender, birthDate, size}=value;
  return (<tr>
      <td>{lastName}</td>
      <td>{firstName}</td>
      <td >{gender}</td>
      <td>{birthDate.toLocaleDateString()}</td>
      <td>{size}</td>
    </tr>
  );
}

export default table((props) => {
  const {stState} = props;
  const displayed = stState.length ? stState : [];
  return (<tbody>
  {displayed.map(({value, index}) => {
    return <Row key={index} value={value}/>
  })}
  </tbody>);
})