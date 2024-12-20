import "./InputBox.css";

export default function InputBox({ onChange, onSubmit, loading }) {
  return (
    <>
      <div className="center">
        <div className="center pa4 br3 shadow-5">
          <textarea
            className="w-100 grow f4 pa2 center br4 ba b--red bg-transparent red mr3 custom-input"
            placeholder="Image Prompt..."
            onChange={onChange}
          ></textarea>
          <button
            className="w-30 grow f4 link ph3 pv2 dib b--green bg-transparent red br4 ba ml3 mt2 custom-submit"
            onClick={onSubmit}
          >
            {loading ? <span className="spinner">⭕</span> : "Generate!"}
          </button>
          <br />
        </div>
      </div>
    </>
  );
}
