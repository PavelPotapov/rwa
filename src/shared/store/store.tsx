import { getUserLanguage } from "@shared/config/i18n/lib";
import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";

type State = {
  language: string;
  user: { name: string } | null;
};

type Action =
  | { type: "SET_LANGUAGE"; payload: string }
  | { type: "SET_USER"; payload: { name: string } | null };

const initialState: State = {
  language: getUserLanguage(),
  user: null,
};

// Определяем тип контекста
type StateContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
  changeLanguageHandler: (key: string) => void;
};

const StateContext = createContext<StateContextType>({
  state: initialState,
  dispatch: () => null,
  changeLanguageHandler: () => {},
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { i18n } = useTranslation();

  const changeLanguageHandler = (key: string) => {
    i18n.changeLanguage(key).then(() => {
      dispatch({ type: "SET_LANGUAGE", payload: key });
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", state.language);

    if (state.language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }
  }, [state.language]);

  useEffect(() => {
    changeLanguageHandler(state.language);
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch, changeLanguageHandler }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
