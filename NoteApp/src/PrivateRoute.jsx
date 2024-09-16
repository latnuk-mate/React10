import React, { useContext } from 'react'
import { Navigate} from 'react-router-dom';
import { NoteProvider } from './NoteContext';

function PrivateRoute({element}) {
    const {user} = useContext(NoteProvider)
  return (
        user ? (
            element
        )
        :(<Navigate to={'/'} replace={true} />)
  )
}

export default PrivateRoute;