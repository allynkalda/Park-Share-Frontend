import React from 'react'
import { Link } from "react-router-dom";

export default function Directory() {

    return (
        <div>
            <Link to={'/rentparking'}>
                <button>Rent Parking</button>
            </Link>
    
            <Link to={'/findparking'}>
                <button>Find Parking</button>
            </Link>
        </div>
    )
}
