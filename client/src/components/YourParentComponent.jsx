import React, { useState } from 'react';
import ScheduleModal from './ScheduleModal';

const YourParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={handleScheduleClick}>
        SCHEDULE CONSULTATION
      </button>

      {/* <ScheduleModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
};

export default YourParentComponent; 