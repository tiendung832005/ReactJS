import React, { useState } from 'react'
import { Navigate, Route } from 'react-router-dom';
import Account from './Account';

export default function PrivateRouter() {
    const [isLoggin, setIsLogin] = useState(false);
    if(isLoggin){
        return <Route element={<Account/>}></Route>
    }else{
        return <Navigate to="/login"/>
    }
  return (
    <div>PrivateRouter
        
    </div>
  )
}
