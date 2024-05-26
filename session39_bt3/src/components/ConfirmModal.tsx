import React from 'react';

interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

interface ConfirmModalProps {
  todo: TodoType;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ todo, onCancel, onConfirm }) => {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>Xác nhận</h5>
          <i className="fas fa-xmark" onClick={onCancel}></i>
        </div>
        <div className="modal-body-custom">
          <p>Bạn chắc chắn muốn xóa công việc {todo.text}?</p>
        </div>
        <div className="modal-footer-custom">
          <button className="btn btn-light" onClick={onCancel}>Hủy</button>
          <button className="btn btn-danger" onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
