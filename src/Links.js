import "./Links.css";
import ZuriIcon from "./ZuriIcon.svg";
import I4GIcon from "./I4GIcon.svg";
import GithubIcon from './GitHubIcon.svg'
import SlackIcon from "./slackIcon.svg"

function Links() {
  return (
    <>
      <div id="links-container">
        <a href="https://training.zuri.team/">
          <button id="btn__zuri" className="btn">
            Zuri Training
          </button>
        </a>
        <a href="https://books.zuri.team">
          <button id="books" className="btn">
            Zuri Books
          </button>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=OffiongDev">
          <button id="book__python" className="btn">
            Python Book
          </button>
        </a>
        <a href="https://background.zuri.team">
          <button id="pitch" className="btn">
            Zuri Background
          </button>
        </a>
        <a href="https://books.zuri.team/design-rules">
          <button id="book__design" className="btn">
            Book designs
          </button>
        </a>
        <div className="icons">
          <img src={SlackIcon} alt="slack" id="Simicodes" />
          <a
            href="https://github.com/simicodes"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="github" />
          </a>
        </div>
        <div className="horizontal_line" />
        <div className="footer">
          <div>
            <img src={ZuriIcon} alt="zuriLogo" />
          </div>
          <div>
            <p>HNG Internship 9 Frontend Task</p>
          </div>
          <div>
            <img src={I4GIcon} alt="I4GLogo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Links;
