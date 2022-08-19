import React from 'react'
import { social } from '../data/Dummydata'

export const Footer = () => {
    return (
        <>
            <footer>
                {social.map((item) => (
                    <>
                        <i data-aos="zoom-in">{item.icon}</i>
                    </>
                ))}
                <p data-aos="zoom-in">All Right Reserved 2022</p>
            </footer>

        </>
    )
}
