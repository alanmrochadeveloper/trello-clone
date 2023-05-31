import { createContext, useContext, FC, Dispatch, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from "./actions";
import { DragItem } from "../DragItem";
import { save } from "../api";
import { withInitialState } from "../utils/withInitialState";

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
};
type AppStateContextProps = {
  draggedItem: DragItem | null;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

export const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  draggedItem: null,
};

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);
    const { draggedItem, lists } = state;
    const getTasksByListId = (id: string) => {
      return lists.find((list) => list.id === id)?.tasks || [];
    };

    useEffect(() => {
      save(state);
    }, [state]);

    return (
      <AppStateContext.Provider
        value={{ lists, getTasksByListId, dispatch, draggedItem }}
      >
        {children}
      </AppStateContext.Provider>
    );
  }
);
export const useAppState = () => {
  return useContext(AppStateContext);
};
