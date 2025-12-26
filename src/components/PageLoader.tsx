
const PageLoader = () => (
  <div className="nes-container is-dark is-centered">
    <p className="nes-text">LOADING QUEST...</p>
    <progress className="nes-progress is-pattern" value="50" max="100"></progress>
  </div>
);

export default PageLoader