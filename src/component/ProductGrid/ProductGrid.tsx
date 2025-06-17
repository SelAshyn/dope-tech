'use client';

import styles from './ProductGrid.module.css';

const products = [
  {
    title: 'F75 GLACIER BLUE',
    brand: 'AULA',
    category: 'MECHANICAL KEYBOARD',
    price: 'Rs 6,999.00 – Rs 7,799.00',
    oldPrice: null,
    tag: 'Sale!',
    desc: 'AULA F75 75% Hot Swappable Wireless Mechanical Keyboard',
    image: 'https://www.ipopularshop.com/cdn/shop/products/20231007174604.jpg?v=1696857655',
  },
  {
    title: 'P1 LITE SILVER-CLOTH',
    brand: 'FLYDIGI',
    category: 'FINGER SLEEVE',
    price: 'Rs 299.00',
    oldPrice: 'Rs 329.00',
    tag: '10% OFF',
    desc: 'Flydigi P1 Lite Silver-Cloth Mobile Gaming Finger Sleeve',
    image: 'https://img.lazcdn.com/g/ff/kf/S306a18dd0da8435e98ad1b7c56b633e99.jpg_720x720q80.jpg',
  },
  {
    title: 'SALNOTES ZERO',
    brand: '7HZ',
    category: 'IN EAR EARPHONES',
    price: 'Rs 2,999.00 – Rs 3,299.00',
    oldPrice: null,
    tag: 'Sale!',
    desc: '7HZ Salnotes Zero In-Ear Earphone IEM',
    image: 'https://backseatgaming.b-cdn.net/wp-content/uploads/2025/03/Salnotes-Zero.jpg',
  },
  {
    title: 'MOUSE SKATES',
    brand: 'PTFE SUPERGLIDE',
    category: 'DOT SKATES FOR GAMING MOUSE',
    price: 'Rs 199.00',
    oldPrice: 'Rs 399.00',
    tag: 'Sale!',
    desc: 'Dot Skates for Gaming Mouse - PTFE Superglide Mouse Skates',
    image: 'https://backseatgaming.b-cdn.net/wp-content/uploads/2025/03/dot-skates.jpg',
  },
  {
    title: 'F75 GLACIER BLUE',
    brand: 'AULA',
    category: 'MECHANICAL KEYBOARD',
    price: 'Rs 6,999.00 – Rs 7,799.00',
    oldPrice: null,
    tag: 'Sale!',
    desc: 'AULA F75 75% Hot Swappable Wireless Mechanical Keyboard',
    image: 'https://www.ipopularshop.com/cdn/shop/products/20231007174604.jpg?v=1696857655',
  },
  {
    title: 'P1 LITE SILVER-CLOTH',
    brand: 'FLYDIGI',
    category: 'FINGER SLEEVE',
    price: 'Rs 299.00',
    oldPrice: 'Rs 329.00',
    tag: '10% OFF',
    desc: 'Flydigi P1 Lite Silver-Cloth Mobile Gaming Finger Sleeve',
    image: 'https://img.lazcdn.com/g/ff/kf/S306a18dd0da8435e98ad1b7c56b633e99.jpg_720x720q80.jpg',
  },
  {
    title: 'SALNOTES ZERO',
    brand: '7HZ',
    category: 'IN EAR EARPHONES',
    price: 'Rs 2,999.00 – Rs 3,299.00',
    oldPrice: null,
    tag: 'Sale!',
    desc: '7HZ Salnotes Zero In-Ear Earphone IEM',
    image: 'https://backseatgaming.b-cdn.net/wp-content/uploads/2025/03/Salnotes-Zero.jpg',
  },
  {
    title: 'MOUSE SKATES',
    brand: 'PTFE SUPERGLIDE',
    category: 'DOT SKATES FOR GAMING MOUSE',
    price: 'Rs 199.00',
    oldPrice: 'Rs 399.00',
    tag: 'Sale!',
    desc: 'Dot Skates for Gaming Mouse - PTFE Superglide Mouse Skates',
    image: 'https://backseatgaming.b-cdn.net/wp-content/uploads/2025/03/dot-skates.jpg',
  },
];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>TRENDING PRODUCTS</h2>
      <br />
      <div className={styles.grid}>
        {products.map((p, i) => (
          <div className={styles.card} key={i}>
            {p.tag && <div className={styles.tag}>{p.tag}</div>}
            <a href="#"><img src={p.image} alt={p.title} className={styles.image} /></a>
            <div className={styles.info}>
              <h4 className={styles.brand}>{p.brand}</h4>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.category}>{p.category}</p>
              <p className={styles.price}>
                {p.price}{' '}
                {p.oldPrice && (
                  <span className={styles.oldPrice}>{p.oldPrice}</span>
                )}
              </p>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
