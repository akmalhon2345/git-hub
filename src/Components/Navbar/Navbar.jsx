import './navbar.css'
import { FaGithub } from "react-icons/fa"
import { GoCopilot, GoIssueOpened, GoGitPullRequest } from "react-icons/go"
import { FaPlus } from "react-icons/fa6"
import { IoBookOutline } from "react-icons/io5"
import { FaBook } from "react-icons/fa6"
import { VscGithubProject } from "react-icons/vsc"
import { GoPackage } from "react-icons/go"
import { FaRegStar } from "react-icons/fa6"

import img from '../assets/image.png'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="contaner">
        <div className="card">
          <div className="left">
            <h1><FaGithub /> Akmalhon</h1>
          </div>
          <div className="right">
            <input type="text" placeholder="Type / to search" />
            <GoCopilot />
            <FaPlus />
            <GoIssueOpened />
            <GoGitPullRequest />
            <img src={img} alt="profile" />
          </div>
        </div>
      </div>
      <div className="componest">
        <ul>
          <li><Link className='link' to="/"><IoBookOutline /> Overview</Link></li>
          <li><Link className='link' to="/repositories"><FaBook /> Repositories</Link></li>
          <li><Link className='link' to="/projects"><VscGithubProject /> Projects</Link></li>
          <li><Link className='link' to="/packages"><GoPackage /> Packages</Link></li>
          <li><Link className='link' to="/start"><FaRegStar /> Stars</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
