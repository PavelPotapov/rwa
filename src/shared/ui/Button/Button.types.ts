import React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  color?: string; // Цвет кнопки
  text?: string; // Текст кнопки
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  className?: string; // Дополнительные классы
}

export type ButtonVariants = "button" | "filled" | "outline";
