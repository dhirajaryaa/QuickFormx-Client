import React from 'react'
import { useState } from 'react'

function ProtectedRoute({ children }) {
    const [check, setCheck] = useState(false);

    if (!check) {
        return ({ children })
    }
}

export default ProtectedRoute
