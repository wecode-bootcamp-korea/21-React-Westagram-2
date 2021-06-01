import COMMENT from './CommentData';

const FEED = [
  {
    id: 1,
    userName: 'my_sshin',
    profile: '/images/miyoungshin/main/profile/my-profile.jpeg',
    picture: '/images/miyoungshin/main/feed/my_sshin-feed-image.JPG',
    likes: 12,
    content: '그림 같은 카페',
    date: '42 MINUTES AGO',
    comment: COMMENT,
  },
  {
    id: 2,
    userName: 'meongsta',
    profile: '/images/miyoungshin/main/profile/goldenretrievers-profile.jpeg',
    picture: '/images/miyoungshin/main/feed/meongsta-feed-image.JPG',
    likes: 120,
    content: '한가롭구만',
    date: '2 HOURS AGO',
  },
  {
    id: 3,
    userName: 'wecode',
    profile: '/images/miyoungshin/main/profile/wecode-profile.jpeg',
    picture: '/images/miyoungshin/main/feed/wecode-feed-image.JPG',
    likes: 12,
    content: '영아일랜드',
    date: '3 HOURS AGO',
  },
];

console.log(FEED);

export default FEED;
