'use'
import { X } from 'lucide-react';
import React, { useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
   const modalRef = useRef<HTMLDivElement>(null);

   if (!isOpen) return null;
 
   const handleClickOutside = (event: React.MouseEvent) => {
     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
       onClose();
     }
   };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClickOutside}>
      <div className="bg-white p-4 rounded-lg relative" ref={modalRef}>
        <button
          className="absolute top-1 right-1 hover:cursor-custom-hover"
          onClick={onClose}
        >
          <X size={16}/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;