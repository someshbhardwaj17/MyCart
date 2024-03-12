import './Login.css'
import email from '../../Assests/email.png'
import password from '../../Assests/password.png'


export default function  Login() {
    return(
        <div className="parent">
           
           <div className='container'>
             <div className='header'>
                <div className='text'>Login</div>
             </div>
             <div className='inputs'>
             <div className='input-parent'>
                <div className='title'>Email Address</div>
                <div className='input'>
                    <img src={email}/>
                    <input type='email' placeholder='somesh@gmail.com'/>
                </div>
             </div>
             <div className='input-parent'>
                <div className='title'>Password</div>
                <div className='input'>
                    <img src={password}/>
                    <input type='password' placeholder='*******'/>
                </div>
             </div>
             </div>
            
             <div className='forgot-remember-password'>
                <div className='remember'>
                    <input className='remember-input' type='checkbox'/>
                    <div>Remember me</div>
                </div>
                <div className='forgot-password'>Forgot password</div>
           
             </div>
             <div className='bottom'>
               <button className='login-btn'>Log In</button>
               <div className='or-section'>
                <div className='line'/>
                <div className='or'>or</div>
                <div className='line'/>
               </div>
               <div className='sinup-section'>
                <div>New to site?</div>
                <div> Sing up now.</div>
               </div>
             </div>
           </div>

        </div>
    );
}