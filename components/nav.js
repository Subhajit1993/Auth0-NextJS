import React from 'react'
import Link from 'next/link'
import Auth from '../lib/Auth';
const auth = new Auth();

var handleAuth = function (params) {
  alert('called')
}

export default class Nav extends React.Component {


  handleLogin(){
    auth.login()
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <ul>
            <li>
              <Link href="/secure-dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <a onClick={()=>this.handleLogin()}>Login / Register</a>
            </li>
          </ul>
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
      </nav>
    )
  }
}