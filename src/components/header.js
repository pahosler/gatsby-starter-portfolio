import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../assets/logo.svg';
import SocialIcons from './social-icons';
import { socialIconList } from './social-icons-list';
import { mq } from './_shared/media';
import { StyledIndexNumber } from './_shared/styled-index-number';

const StyledHeader = styled.header`
  height: var(--header-height);
  flex-shrink: 0;
  background-color: var(--bg-content-color);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-left);
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 calc((var(--space) / 2));
`;
const StyledHomeLink = styled(Link)`
  text-decoration: none;
`;
const StyledLogo = styled(Logo)`
  width: var(--header-height);
  height: var(--header-height);
  fill: var(--title-color);
`;
const StyledNav = styled.nav`
  margin-left: 0.75rem;
  display: flex;
  flex: 1;
  align-items: center;
  display: none;

  ${mq.gt.sm} {
    display: block;
  }
`;
const StyledNavLink = styled(Link)`
  margin: 0 0.5rem;
  text-decoration: none;
  color: var(--title-color) !important;
`;

const Header = ({ menuLinks }) => (
  <StyledHeader>
    <StyledContainer>
      <StyledHomeLink title="logo" to="/">
        <StyledLogo />
      </StyledHomeLink>
      <StyledNav>
        {menuLinks.map((link, index) => (
          <StyledNavLink key={link.name} to={link.link} activeClassName="active">
            <StyledIndexNumber>{`${String(index + 1).padStart(2, '0')}.`}</StyledIndexNumber>
            {link.name}
          </StyledNavLink>
        ))}
      </StyledNav>
      <SocialIcons icons={socialIconList} />
    </StyledContainer>
  </StyledHeader>
);

const menuLinksPropTypeShape = PropTypes.shape({
  name: PropTypes.string,
  link: PropTypes.string,
});

Header.propTypes = {
  menuLinks: PropTypes.arrayOf(menuLinksPropTypeShape).isRequired,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
