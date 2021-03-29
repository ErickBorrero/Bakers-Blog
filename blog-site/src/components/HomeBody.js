import Section from './shared-components/Section';
import profilePic from '../assets/images/selfie.jpg';

const HomeBody = () => {
  return (
    <Section
      heading="Nury Booty"
      p="Im going to Tik Tok all over your ...."
      img={profilePic}
      imgFirst={true}
    />
  );
};

export default HomeBody;
