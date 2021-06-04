import React from 'react';
import Modal from '../../../../Components/Modal/Modal';

class FeedLikeModal extends React.Component {
  render() {
    const { likeList, isOpen, closeModal } = this.props;

    return (
      <Modal open={isOpen} close={closeModal} header="좋아요">
        <ul>
          {likeList?.map((person, no) => (
            <li key={no}>
              <div className="profile-box">
                <img
                  src={person.img}
                  className="profile-box-img"
                  alt="프로필 사진"
                />
              </div>
              <div className="profile-box-desc">
                <div className="bold">{person.id}</div>
                <div className="gray">{person.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </Modal>
    );
  }
}

export default FeedLikeModal;
