import { router } from "../Router";
import { RouterProvider } from "react-router-dom";
import { StateProvider } from "@shared/store/store";
import { ToastContainer } from "@shared/ui/ToastContainer/ToastContainer";
import { CheckInstalledWallets } from "@features/CheckInstalledWallets/CheckInstalledWallets";
import { AppKitProvider } from "./AppKit";
import { SwitchToPolygon } from "@features/SwitchToPolygon/SwitchToPolygon";

export const AppProviders = () => {
  return (
    <StateProvider>
      <AppKitProvider>
        <RouterProvider router={router} />
        <CheckInstalledWallets />
        <SwitchToPolygon />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppKitProvider>
    </StateProvider>
  );
};
