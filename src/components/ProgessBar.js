'use client'
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ skill, percentage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const progressBarRef = useRef(null);

  useEffect(() => {
    if (inView && progressBarRef.current) {
      progressBarRef.current.style.width = `${percentage}%`;
    }
  }, [inView, percentage]);
  

  return (
    <div ref={ref} className="mb-4" style={{ backgroundColor: "#e8f1f9" }}  >
      <div className="text-lg font-semibold shadow-2xl">{skill}</div>
      <div className=" bg-gray-200 rounded-full h-6 mt-1">
        <div
          ref={progressBarRef}
          className="bg-orange-500 h-6 rounded-full"
          style={{ width: 0, transition: 'width 2s' }}
        >
          <span className="ml-2 text-white">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
