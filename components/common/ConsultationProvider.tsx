'use client';

import React, { createContext, useContext, useState } from 'react';
import ConsultationModal from './ConsultationModal';

interface ModalData {
  isOpen: boolean;
  productName?: string;
  sku?: string;
}

interface ConsultationContextType {
  openConsultation: (productName?: string, sku?: string) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  openConsultation: () => {},
  closeConsultation: () => {},
});

export const useConsultation = () => useContext(ConsultationContext);

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    productName: '',
    sku: '',
  });

  const openConsultation = (productName?: string, sku?: string) => {
    setModalData({
      isOpen: true,
      productName,
      sku,
    });
  };

  const closeConsultation = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation }}>
      {children}
      <ConsultationModal
        isOpen={modalData.isOpen}
        onClose={closeConsultation}
        productName={modalData.productName}
        sku={modalData.sku}
      />
    </ConsultationContext.Provider>
  );
}

