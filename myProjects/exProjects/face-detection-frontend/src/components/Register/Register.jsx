import './Register.css';

export const Register = ({ onRouteChange }) => {
    return(
        <div>
            <article className="br3 ba b--green mv4 w-100 w-50-m w-25-l mw5 center ">
                <main className="pa4 green ">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3">
                            <input className="pa2 br3 input-reset ba b--green bg-transparent hover-green w-100" 
                                type="text" 
                                name="firstName"  
                                id="firstName" 
                                placeholder='First Name'/>
                        </div>
                        <div className="mt3">
                            <input className="pa2 br3 input-reset ba b--green bg-transparent hover-green w-100" 
                                type="text" 
                                name="lastName"  
                                id="lastName" 
                                placeholder='Last Name'/>
                        </div>
                        <div className="mt3">
                            <input className="pa2 br3 input-reset ba b--green bg-transparent hover-green w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                placeholder='Email'/>
                        </div>
                        <div className="mv3">
                            <input className="b br3 pa2 input-reset ba b--green bg-transparent hover-green w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                placeholder='Password'/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 br3 input-reset ba b--green bg-transparent grow pointer f6 dib green" 
                            type="submit" 
                            value="Register"
                            onClick={() => onRouteChange('sign_in')}
                            />
                        </div>
                    </form>
                </main>
            </article>
        </div>
    )
}
