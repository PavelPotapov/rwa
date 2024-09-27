export type Mode = "production" | "development";

export interface EnvVariables {
  mode: Mode;
  WEBPACK_SERVE?: boolean;
  WEBPACK_BUILD: boolean;
}
