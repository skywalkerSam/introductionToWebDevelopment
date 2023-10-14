import './ImageLinkForm.css'

export const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className="f3 white">
                {'This magic brain will detect faces in your pictures. Give it a try...'}
            </p>
            <div className="center">
                <div className="center form pa4 br3 shadow-5">
                    <input 
                        className="w-70 f4 pa2 center" 
                        type="text" 
                        onChange={onInputChange}>    
                    </input>
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib bg-light-blue"
                        onClick={onButtonSubmit}    
                        >Detect
                    </button>
                </div>
            </div>
        </div>
    )
}
