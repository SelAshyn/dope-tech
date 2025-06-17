'use client';

import styles from './CategoryGrid.module.css';
import {
  FaMobileAlt,
  FaTabletAlt,
  FaMouse,
  FaCamera,
  FaLaptop,
  FaDesktop,
  FaPrint,
  FaHeadphones,
  FaWatchmanMonitoring,
  FaHeadphonesAlt,
} from 'react-icons/fa';

const categories = [
  { icon: <FaMobileAlt size={32} />, label: 'Smart Phones' },
  { icon: <FaTabletAlt size={32} />, label: 'Tablets' },
  { icon: <FaMouse size={32} />, label: 'Mouses' },
  { icon: <FaCamera size={32} />, label: 'Cameras' },
  { icon: <FaWatchmanMonitoring size={32} />, label: 'Smart Watches' },
  { icon: <FaLaptop size={32} />, label: 'Laptops' },
  { icon: <FaDesktop size={32} />, label: 'PCs' },
  { icon: <FaPrint size={32} />, label: 'Printers' },
  { icon: <FaHeadphonesAlt size={32} />, label: 'Earbuds' },
  { icon: <FaHeadphones size={32} />, label: 'Head Phones' },
];

const CategoryGrid = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>BROWSE CATEGORIES</h2>
      <br />
      <div className={styles.grid}>
        {categories.map((item, index) => (
          <div className={styles.card} key={index}>
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
