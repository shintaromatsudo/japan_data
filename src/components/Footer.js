import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer">
      <div className="content has-text-centered">
        <p>このマップはD3.jsを用いたデータ可視化の検証を目的に作成しており、データの正確性は保証しません。</p>
        <p>2018 <a href="https://shintaromatsudo.github.io/" target="_blank" rel="noopener noreferrer">Shintaro Matsudo</a> All rights reserved.</p>
      </div>
      </footer>
    );
  }
}
