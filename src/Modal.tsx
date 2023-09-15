"use client";

import { useModal } from "./ModalContext";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default function Modal({ children }: Props) {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      <div
        className={`${
          isOpen
            ? "bg-white opacity-50 pointer-none overflow-y-hidden"
            : "hidden"
        } 
      left-0 top-0 z-40 fixed h-screen w-screen`}
      ></div>
      <div
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        className={`top-[80px] w-full z-50 right-0 fixed bg-yellow-400 rounded-3xl`}
      >
        {isOpen && (
          <div className="flex-1 flex flex-col w-full px-6 pt-4 pb-8 justify-center text-center relative">
            <button className="ml-auto" onClick={()=>closeModal()}>x</button>
            {children}
          </div>
        )}
      </div>
    </>
  );
}
