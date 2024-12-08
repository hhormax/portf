import "./style.css";

const Section = () => {
  return (
    <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>
              HTML, CSS, JavaScript, TypeScript, ReactJS(ReactDOM,
              React-Router-Dom), Redux(React-Redux, Redux-Thunk, React-Redux),
              Formik, NPM, Axios, Git
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">AI</h2>
            <p>TensorFlowJS, Google MediaPipe(Hand Detection, Face Mesh)</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Section;
