import Loader from 'react-loaders'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = ()=>{
    const refForm = useRef()


    const sendEmail=(e)=>{
        e.preventDefault()

        emailjs.sendForm(
                'service_t2lenkb',
                'template_unm2ofd',
                refForm.current,
                'pNKy_2VNPrpKCjLbi'
            )
            .then(()=>{
                alert('Message Successfully sent !')
                window.location.reload(false)
            }
            ,()=>{
                alert('failed to send the message , please try again !')

            }
            )
    }


    return(
<>

<div className="container contact-page">

        <div className="text-zone">
            <h1>CONTACT ME</h1>
            <p>I am interested in freelance opportunitites - especially ambitious or large projects . However , if you have other request or question , don't hesitate to contact me using below form either .</p>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <ol>
                        <li className='half'><input type='text' name="name" placeholder='Name' required/> </li>
                        <li className='half'><input type='email' name="email" placeholder='E-mail' required/> </li>
                        <li><input placeholder="Subject" type='text' name='subject' required /></li>
                        <li><textarea placeholder='Message' name="Message" required /></li>
                        <li><input type="submit" className='flat-button' value='send' /></li>
                    </ol>
                </form>
            </div>
        </div>

</div>

<Loader type='pacman'/>



</>
    )
}

export default Contact