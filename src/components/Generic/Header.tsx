import styled from 'styled-components';
import BarclaysLogo from '../../assets/barclays-logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 30px;
  width: auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={BarclaysLogo} alt="Barclays Logo" />
    </HeaderContainer>
  );
};

export default Header;
