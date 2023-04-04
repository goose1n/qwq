import React from 'react'
import styles from './PeopleCard.module.css'
import { NavLink } from 'react-router-dom';
const PeopleCard = ({img, name, work, inst, face, twit, to}) => {
  return (
    <div className={styles.gridteam}>
      <NavLink to={to}>
          <img
            className={styles.teamGridImg}
            src={img}
            alt=""
          />
          </NavLink>
          <div className={styles.block_icon}>
             <div className={styles.nameiconteam}>
          <h3 className={styles.teamName}>{name}</h3>
            <h3 className={styles.proffTeam}>{work}</h3>
            </div>
         <div className={styles.social}>
            <a
              target="_blank"
              href="https://www.instagram.com/"
            >
              <img
                src={inst}
                alt=""
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/index.php"
            >
              <img className={styles.faces}
                src={face}
                alt=""
              />
              <a target="_blank" href="https://twitter.com/i/flow/login">
                <img
                  src={twit}
                  alt=""
                />
              </a>
            </a>
            </div>
            </div>
          </div>
        
  )
}

export default PeopleCard;