import React from 'react';

class ProfileBox extends React.Component {
  render() {
    const { profileList, className, boxName, isMore, isLive } = this.props;
    return (
      <div className={className}>
        <h3>{boxName}</h3>
        {isMore ?? <div className="all_view gray">모두 보기</div>}
        <ul>
          {profileList?.map((profile, no) => (
            <li key={no}>
              <div className={`profile-box ${isLive && 'live-view'}`}>
                <img
                  src={profile.profileImg}
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">{profile.profileName}</div>
                <div className="gray">{profile.profileDesc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProfileBox;
