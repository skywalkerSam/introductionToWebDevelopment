import starboy_logo from '/logo-no-background.png';

export default function Logo({ onRouteChange }) {

    const updateRoute = () => {
        onRouteChange("home");
    }

    return (
        <div>
            <div className='flex flex-start pointer'>
                <img src={starboy_logo}
                    alt="Starboy Logo"
                    style={{ 
                        height: 200, 
                        marginLeft: "1%",
                        marginTop: "1%",
                    }}
                    onClick={updateRoute}>
                </img>
            </div>
        </div>
    )
}
