import React from 'react';

interface WarningModalProps {
  onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>Cảnh báo</h5>
          <i className="fas fa-xmark" onClick={onClose}></i>
        </div>
        <div className="modal-body-custom">
          <p>Tên công việc không được phép để trống.</p>
        </div>
        <div className="modal-footer-custom">
          <button className="btn btn-light" onClick={onClose}>Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
