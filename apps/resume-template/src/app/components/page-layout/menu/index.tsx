import { ListItem, List } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Menu: FC = () => {
  return (
    <List>
      <ListItem>
        <Link to="/about-me">About Me</Link>
      </ListItem>
      <ListItem>
        <Link to="/experiences">Experiences</Link>
      </ListItem>
      <ListItem>
        <Link to="/skills">Skills</Link>
      </ListItem>
      <ListItem>
        <Link to="/contact-me">Contact</Link>
      </ListItem>
    </List>
  );
};
export default Menu;