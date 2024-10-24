import './SignIn.css';

export const SignIn = ({ onRouteChange }) => {
    return(
        <div>
            <article className="br3 ba b--green mv4 w-100 w-50-m w-25-l mw5 center ">
                <main className="pa4 green ">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                {/* <label className="db fw6 lh-copy f6" for="email-address">Email</label> */}
                                <input className="pa2 br3 input-reset ba b--green bg-transparent hover-green w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" 
                                    placeholder='Email'/>
                            </div>
                            <div className="mv3">
                                {/* <label className="db fw6 lh-copy f6" for="password">Password</label> */}
                                <input className="b br3 pa2 input-reset ba b--green bg-transparent hover-green w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    placeholder='Password'/>
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}
                        </fieldset>
                        <div>
                            <input className="b ph3 pv2 br3 input-reset ba b--green bg-transparent grow pointer f6 dib green" 
                                type="submit" 
                                value="Log in"
                                onClick={() => onRouteChange('home')}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" className="f6 link dim black db underline green"
                                onClick={() => onRouteChange('sign_up')}>Sign up
                            </a>
                            {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                        </div>
                    </form>
                </main>
            </article>
        </div>
    )
}
