import './Footer.scss'

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <span className="footer__text">0 items to do</span>

      <ul className="footer__button-list">
        <li>
          <button className="footer__button">All</button>
        </li>
        <li>
          <button className="footer__button">Active</button>
        </li>
        <li>
          <button className="footer__button">Completed</button>
        </li>
      </ul>

      <button className="footer__button">Clear completed</button>
    </div >
  )
}

export { Footer }