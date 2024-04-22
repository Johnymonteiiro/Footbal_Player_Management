"üse client"

import { useState, useEffect, useRef } from "react";

interface UseClickOutSide {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refElement: React.RefObject<HTMLDivElement>;
}

const useClickOutSide = (): UseClickOutSide => {
  const [isOpen, setIsOpen] = useState(false);
  const refElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (
        refElement.current &&
        !refElement.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  return { isOpen, setIsOpen, refElement };
};

export default useClickOutSide;
