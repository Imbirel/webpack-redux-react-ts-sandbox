import { Link } from 'react-router';
import styles from './HeroSection.module.css';

export const HeroSection = function HeroSection() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <h1>Main Page</h1>
      <p>description</p>
      <p className={styles.blue}>description_blue</p>
    </div>
  );
};
