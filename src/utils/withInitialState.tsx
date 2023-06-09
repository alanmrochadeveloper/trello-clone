import { useState, useEffect, ComponentType } from "react";
import { load } from "../api";
import { AppState } from "../state/appStateReducer";

type InjectedProps = {
  initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initalState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: null,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();
    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load();
          setInitialState(data);
        } catch (e: any) {
          setError(e);
        } finally {
          setIsLoading(false);
        }
      };
      fetchInitialState();
    }, []);

    if (isLoading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    return (
      <WrappedComponent {...(props as TProps)} initialState={initalState} />
    );
  };
}
