import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <div className={styles.TeamCont}>
      <div className={styles.teamBlock}>
        <h1 className={styles.teamBlock_title}>Style Guide</h1>
        <img
          className={styles.teamImg}
          src="./public/ImgProj/banners/bcgTeam.jpg"
          alt=""
        />
      </div>

      <div className={styles.TeamText}>
        <h3 className={styles.Team}>Team</h3>
        <h1 className={styles.TeamH}>Our Organic Experts</h1>
        <p className={styles.TeamP}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's <br /> standard dummy text ever since
          the 1500s, when an unknown printer took a galley.
        </p>
      </div>

      <div className={styles.teamGrid}>
        <div className={styles.gridteam}>
          <img
            className={styles.teamGridImg}
            src="./public/ImgProj/photos/Bacardo.jpg"
            alt=""
          />
          <h3 className={styles.teamName}>Giovani Bacardo</h3>
          <div className={styles.nameiconteam}>
            <h3 className={styles.proffTeam}>Farmer</h3>
            <a
              className={styles.dd}
              target="_blank"
              href="https://www.facebook.com/index.php"
            >
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Fb.png "
                alt=""
              />
              <a target="_blank" href="https://twitter.com/i/flow/login">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Twiter.png"
                  alt=""
                />
              </a>
            </a>
          </div>
        </div>
        <div className={styles.gridteam}>
          <img
            className={styles.teamGridImg}
            src="./public/ImgProj/photos/Loreno.jpg"
            alt=""
          />
          <h3 className={styles.teamName}>Marianne Loreno</h3>
          <div className={styles.nameiconteam}>
            <h3 className={styles.proffTeam}>Designer</h3>
            <a
              className={styles.dd}
              target="_blank"
              href="https://www.facebook.com/index.php"
            >
              <a target="_blank" href="https://www.instagram.com/">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Insta.png"
                  alt=""
                />
              </a>
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Fb.png "
                alt=""
              />
              <a target="_blank" href="https://twitter.com/i/flow/login">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Twiter.png"
                  alt=""
                />
              </a>
            </a>
          </div>
        </div>
        <div className={styles.gridteam}>
          <img
            className={styles.teamGridImg}
            src="./public/ImgProj/photos/Pelore.jpg"
            alt=""
          />
          <h3 className={styles.teamName}>Riga Pelore</h3>
          <div className={styles.nameiconteam}>
            <h3 className={styles.proffTeam}>Farmer</h3>
            <a
              className={styles.dd}
              target="_blank"
              href="https://www.facebook.com/index.php"
            >
              <a target="_blank" href="https://www.instagram.com/">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Insta.png"
                  alt=""
                />
              </a>
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Fb.png "
                alt=""
              />
              <a target="_blank" href="https://twitter.com/i/flow/login">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Twiter.png"
                  alt=""
                />
              </a>
            </a>
          </div>
        </div>

        <div className={styles.gridteam}>
          <img
            className={styles.teamGridImg}
            src="./public/ImgProj/photos/Knightley.jpg"
            alt=""
          />
          <h3 className={styles.teamName}>Keira Knightley</h3>
          <div className={styles.nameiconteam}>
            <h3 className={styles.proffTeam}>Farmer</h3>
            <a
              className={styles.dd}
              target="_blank"
              href="https://www.facebook.com/index.php"
            >
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Fb.png "
                alt=""
              />
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Twiter.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className={styles.gridteam}>
          <img
            className={styles.teamGridImg}
            src="./public/ImgProj/photos/Lawrence.jpg"
            alt=""
          />
          <h3 className={styles.teamName}>Scott Lawrence</h3>
          <div className={styles.nameiconteam}>
            <h3 className={styles.proffTeam}>Designer</h3>
            <a
              className={styles.dd}
              target="_blank"
              href="https://www.facebook.com/index.php"
            >
              <a target="_blank" href="https://www.instagram.com/">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Insta.png"
                  alt=""
                />
              </a>
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Fb.png "
                alt=""
              />
              <a target="_blank" href="https://twitter.com/i/flow/login">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Twiter.png"
                  alt=""
                />
              </a>
            </a>
          </div>
        </div>
        <div className={styles.gridteam}>
          <img
            className={styles.teamGridImg}
            src="./public/ImgProj/photos/Allen.jpg"
            alt=""
          />
          <h3 className={styles.teamName}>Karen Allen</h3>
          <div className={styles.nameiconteam}>
            <h3 className={styles.proffTeam}>Farmer</h3>
            <a
              className={styles.dd}
              target="_blank"
              href="https://www.facebook.com/index.php"
            >
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Insta.png"
                alt=""
              />
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Fb.png "
                alt=""
              />
              <a target="_blank" href="https://twitter.com/i/flow/login">
                <img
                  className={styles.iconfot}
                  src="./public/ImgProj/icon/Twiter.png"
                  alt=""
                />
              </a>
            </a>
          </div>
        </div>
      </div>

      <SubBlock />
    </div>
  );
};

export default Team;
