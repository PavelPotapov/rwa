import { toast, ToastContent, ToastOptions } from "react-toastify";
import { IToastManager } from "@shared/types/ToastManager.types";
import i18next from "i18next";

export class ToastManager implements IToastManager {
  private static instance: ToastManager | null = null;
  private constructor() {}

  public static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  public success(message: string | ToastContent, options?: ToastOptions) {
    toast.success(message);
  }

  public error(message: string | ToastContent, options?: ToastOptions) {
    toast.error(message);
  }

  public info(message: string | ToastContent, options?: ToastOptions) {
    toast.info(message);
  }

  public warning(message: string | ToastContent, options?: ToastOptions) {
    toast.warn(message);
  }
}
