import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  isAnimated = true,
  onClick,
  ...props
}) {
  const classes = `card ${className}`;

  return isAnimated ? (
    <motion.div
      className={classes}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  ) : (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
}