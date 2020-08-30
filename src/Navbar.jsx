import React from 'react'

    import { Link } from 'react-router-dom'
    const Navbar = () => {
        return (
            <div>
                <ul>
                    <li><Link to='./Home'>Home</Link></li>
                    <li><Link to ='./Gategory'>Gategory</Link></li>
                    <li><Link to='./Products'>Products</Link></li>
                    <li><Link to ='./Adminarea'>Admin area</Link></li>

                </ul>
            </div>
        )
    }

export default Navbar ;