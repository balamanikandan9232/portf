import React from 'react'
import { Heading } from '../common/Heading'
import { contact } from '../data/Dummydata'

export const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className='container'>
                    <Heading title="Keep In Touch" />
                    <div className='container flexsb'>
                        <div className='right'>
                            <form>
                                <div className='flex'>
                                    <input type="text" placeholder="Name" data-aos="zoom-in-down" />
                                    <input type="text" placeholder="Email" data-aos="zoom-in-up" />
                                </div>
                                <input type="text" placeholder="Subject" data-aos="zoom-in-up" />
                                <textarea data-aos="zoom-in-down" name='' id="" cols="30" rows="10" ></textarea>
                                <button data-aos="zoom-in-down">Submit</button>
                            </form>
                        </div>
                        <div className='left' data-aos="zoom-in-down">
                            {contact.map((item) => (
                                <div className='box'>
                                    <i>{item.icon}</i>
                                    <p>{item.text1}</p>
                                    <p>{item.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
