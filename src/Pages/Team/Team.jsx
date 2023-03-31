import React from "react";
import PeopleCard from "../../UI/PeopleCard/PeopleCard";
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
        <PeopleCard
          to="/portfolio"
          img="./public\ImgProj\photos\Bacardo.jpg"
          name="Giovani Bacardo"
          work="Farmer"
          face=".\public\ImgProj\icon\Fb.png"
          twit=".\public\ImgProj\icon\Twiter.png"
        />
        <PeopleCard
          img="./public\ImgProj\photos\Loreno.jpg"
          to="/portfolio"
          name="Marianne Loreno"
          work="Designer"
          inst=".\public\ImgProj\icon\Insta.png"
          face=".\public\ImgProj\icon\Fb.png"
          twit=".\public\ImgProj\icon\Twiter.png"
        />
        <PeopleCard
          img="./public\ImgProj\photos\Pelore.jpg"
          name="Riga Pelore"
          to="/portfolio"
          work="Farmer"
          inst=".\public\ImgProj\icon\Insta.png"
          face=".\public\ImgProj\icon\Fb.png"
          twit=".\public\ImgProj\icon\Twiter.png"
        />
        <PeopleCard
          img="./public\ImgProj\photos\Knightley.jpg"
          name="Keira Knightley"
          to="/portfolio"
          work="Farmer"
          face=".\public\ImgProj\icon\Fb.png"
          twit=".\public\ImgProj\icon\Twiter.png"
        />
        <PeopleCard
          img="./public\ImgProj\photos\Lawrence.jpg"
          name="Scott Lawrence"
          to="/portfolio"
          work="Designer"
          inst=".\public\ImgProj\icon\Insta.png"
          face=".\public\ImgProj\icon\Fb.png"
          twit=".\public\ImgProj\icon\Twiter.png"
        />
        <PeopleCard
          img="./public\ImgProj\photos\Allen.jpg"
          name="Karen Allen"
          to="/portfolio"
          work="Farmer"
          inst=".\public\ImgProj\icon\Insta.png"
          face=".\public\ImgProj\icon\Fb.png"
          twit=".\public\ImgProj\icon\Twiter.png"
        />
      </div>

      <SubBlock />
    </div>
  );
};

export default Team;
