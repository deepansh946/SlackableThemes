import React from 'react'
import '../styles/sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell as farBell } from '@fortawesome/fontawesome-free-regular'
import { faPlusCircle, faCommentDots, faChevronDown, faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  const channels = ['front-end-set-up','general', 'random']
  const messages = ['Slackbot','yisselda', 'terrance', 'christine']
  const apps = ['Install Giphy', 'Install Simple Poll', 'Add more apps']

  return (
  <div className='sidebar'>
    <FontAwesomeIcon className='bell-icon' icon={['far', 'bell']} />
    <h1 className='company-name'>SlackableThemes <FontAwesomeIcon className='down-icon' icon={faChevronDown} /> </h1>

    <p className='username'><span className='active-status'>●</span> Yisselda</p>
    <input className='find-input' type='text' value='Jump to...' readOnly />
    <FontAwesomeIcon className='right-icon' icon={faCaretSquareRight} />
    <FontAwesomeIcon className='left-icon' icon={faCaretSquareLeft} />

    <p className='threads'><FontAwesomeIcon className='chat-icon' icon={faCommentDots} /> Threads</p>

    <FontAwesomeIcon className='plus-icon' icon={faPlusCircle} />
    <h2 className='channels'>Channels</h2>
    <ul className='channels-list'>
      {channels.map((channel) => <li key={channel}># {channel}</li>)}
    </ul>

    <FontAwesomeIcon className='plus-icon' icon={faPlusCircle} />
    <h2 className='direct-messages'>Direct Messages</h2>
    <ul className='messages-list'>
      {messages.map((message) => <li key={message}><span className='active-status'>●</span> {message}</li>)}
    </ul>

    <p className='invite-people'>+ Invite people</p>

    <FontAwesomeIcon className='plus-icon' icon={faPlusCircle} />
    <h2 className='apps'>Apps</h2>
    <ul className='apps-list'>
      {apps.map((app) => <li key={app}>+ {app}</li>)}
    </ul>
  </div>
  )
}

export default SideBar;