
import emailjs from 'emailjs-com';

function Contact(){
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_8y9eczx', 'template_xjc751g', e.target, 'user_vjfTF7LPtlPdpVWVIP7TX')       
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
          e.target.reset()
          alert('Sent!')
    }
    return(
        <div id='contact-form'>
            <div id='contact-form-child'>
            <h2 id='contact-title'>Contact</h2>
            <div id='contact'>
                <form onSubmit={sendEmail}>
                <div>
                <input type='text' name='name' placeholder='Name'className='col-form'></input>
            </div>
            <div>
                <input type='text' name='subject'  placeholder='Subject' className='col-form'></input>
            </div>   <div>
                <input type='text' name='email' placeholder='Email Adress' className='col-form'></input>
            </div>   <div>
                <textarea type='email' name='message' placeholder='Message' className='col-message'></textarea>
            </div>
            <div id='submit-parent'>
                <input type='submit' placeholder='Submit' className='col-submit'></input>
            </div></form>
            </div>
</div>
        </div>
    )
}

export default Contact