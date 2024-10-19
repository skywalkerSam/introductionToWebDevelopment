export function Navigation({ onRouteChange, isSignedIn }){

    return(
        (isSignedIn) ?
            <div>
                <nav style={{display:"flex", justifyContent:"flex-end"}}>
                    <a className="f5 link dim underline pa3 white pointer"
                        onClick={() => onRouteChange('sign_out')}>Sign Out
                    </a>
                </nav>
            </div>
        :   <div>
                <nav style={{display:"flex", justifyContent:"flex-end"}}>
                    <a className="f5 link dim underline pa3 white pointer"
                        onClick={() => onRouteChange('sign_in')}>Log in/Register
                    </a>
                    <a className="f5 link dim underline pa3 white pointer"
                        onClick={() => onRouteChange('home')}>Guest Log in
                    </a>
                </nav>
            </div>
    )
}
