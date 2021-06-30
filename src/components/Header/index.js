import React from 'react'
import './Header.css'

let CLONEFLIX  = "https://i.imgur.com/0FKCMHT.png"
let ZAPFLIX = "https://i.imgur.com/iS1qcrd.png"
let NETFLIX = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={CLONEFLIX} alt="CLONEFLIX"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}