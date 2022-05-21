import React from 'react';

function AppFooter() {
  return (
    <footer className="px-12">
      <div className="section">
        <h1>Female Daliy - Find everything you want to know about beauty on Female Daily</h1>
        <p className="subtitle">
          Product reviews, Tips & Trick, Expert and Consumer Opinions,
          Beauty Tutorials, Discussions, Beauty Workshops, anything!
          <br />
          We are here to be your friendly solutions to all things beauty, inside and out!
        </p>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-4 px-12">
        <div>ini Col 1</div>
        <div>ini Col 2</div>
        <div>ini Col 3</div>
        <div className="row-span-2">ini Col 4</div>
        <div className="col-span-2">ini Col 5 Span 3</div>
      </div>
      {/* <div className="grid"></div> */}
    </footer>
  );
}

export default AppFooter;
