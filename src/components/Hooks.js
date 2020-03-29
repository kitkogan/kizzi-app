import React, { useState } from 'react';

export default function Hooks() { // can put export default here SOMETIMES

  state = {
    name: '',
    ofAge: false
  }

  // const dispatch = useDispatch();
  // const history = useHistory();
  // const userData = useSelector(state => state.userDataReducer) // basically MapStateToProps

  // replaces this.state
  const [name, setName] = useState('');
  const [ofAge, setOfAge] = useState(false);


  // to set Hook
  <input value={name} onChange={(e)=>setName(e.target.value)} />

  return(
    <>
    <p>
      {name}, is of age? {ofAge}
    </p>
    </>
  );
}