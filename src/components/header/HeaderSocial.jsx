import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
            <a href='https://github.com' target="_blank"><FaGithub/></a>
        </div>
    )
}

export default HeaderSocial