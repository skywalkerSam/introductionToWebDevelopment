// component: Card.jsx

export default function Card(props) {
    // I like using props instead of destructuring...
    return (
        <div className="card">
            {
                /* 
                    pass className={condition ? value : undefined} instead. 
                */
            }
            <div className={props.selected && 'selected'}>
                <img
                    src={props.image}
                    alt="Card Front"
                    className="card-face" />

                <img
                    src="/assets/logo.png"
                    alt="Card Back"
                    className="card-back"
                    onClick={props.onClick} />
            </div>

        </div>
    )
}


// NOTE: `CSS` defined on `index.css` for some reason...
