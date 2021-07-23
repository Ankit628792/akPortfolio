import React, { useState } from 'react'
import Button from './Button'
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import emailjs from 'emailjs-com';
function Contact() {
    const [isSending, setisSending] = useState(false)
    const [data, setData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.from_email && data.from_name && data.message && data.from_email.length > 3) {
            setisSending(true);
            emailjs.send('service_sv9wgnh', 'template_mi6o31r', data, 'user_MakiHHTPMRIhEyg9GFelr')
                .then((response) => {
                    setData({
                        from_name: '',
                        from_email: '',
                        message: ''
                    });
                    console.log('Message sent')
                }, (err) => {
                    window.alert('Error in sending message !')
                });
            setisSending(false)
        }
    };

    return (
        <section>
            <div className="container">
                <div className="contactInfo">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><RoomIcon /></span>
                                <span>New Delhi, India
                                </span>
                            </li>

                            <li>
                                <span><EmailIcon /></span>
                                <span>ankit628792@gmail.com</span>
                            </li>

                            <li>
                                <span><PhoneIcon /></span>
                                <span>+91 9818451195</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contactForm">
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input required type="text" name="from_name" value={data.from_name} placeholder="Your Name" onChange={handleChange} />
                            </div>
                            <div className="inputBox w50">
                                <input required type="email" name="from_email" value={data.from_email} placeholder="Your Mail Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]" onChange={handleChange} />
                            </div>
                            <div className="inputBox w100">
                                <textarea minLength="3" min={3} name="message" value={data.message} placeholder="Type Your Message Here" required onChange={handleChange}></textarea>
                            </div>
                            {
                                isSending ?
                                    <Button text="Sending..." />
                                    :
                                    <div type="submit" onClick={handleSubmit}>
                                        <Button text="Send Message" />
                                    </div>
                            }
                        </div>
                    </form>
                </div>
            </div>


        </section>
    )
}

export default Contact
