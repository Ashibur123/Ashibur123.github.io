import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  icon,
  fullWidth = false,
  isAnimated = true,
  ...props
}) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} {...props}>
        {isAnimated ? (
          <motion.span
            className={classes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonContent}
          </motion.span>
        ) : (
          <span className={classes}>{buttonContent}</span>
        )}
      </Link>
    );
  }

  return isAnimated ? (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  ) : (
    <button className={classes} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
}