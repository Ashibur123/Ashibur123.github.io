import { motion } from 'framer-motion';

export default function ProgressBar({ value = 0, label, showValue = true, className = '' }) {
  return (
    <div className={`w-full ${className}`}>
      {label && <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        {showValue && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}%</span>
        )}
      </div>}
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div 
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full" 
          style={{ width: `${value}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}