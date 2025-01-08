import { createContext, FC, ReactNode, useContext } from 'react';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

interface SharedStateContextType {
    scrollY: Animated.SharedValue<number>;
    scrollYGlobal: Animated.SharedValue<number>;
    scrollToTop: () => void;
}

const SharedStateContext = createContext<SharedStateContextType | undefined>(undefined);

/**
 * The `SharedStateProvide` component in TypeScript React provides shared state management for scroll
 * positions and a function to scroll to the top.
 * @param  - The code snippet you provided is a React functional component called `SharedStateProvide`.
 * It takes a prop `children` which is of type `ReactNode`. Within this component, it initializes two
 * shared values `scrollY` and `scrollYGlobal` using the `useSharedValue` hook. It
 * @returns The `SharedStateProvide` component is being returned. It is a functional component that
 * provides a context provider (`SharedStateContext.Provider`) with the values `scrollY`,
 * `scrollYGlobal`, and `scrollToTop` as context values. The children of the component are rendered
 * within this context provider.
 */
export const SharedStateProvider:FC<{children: ReactNode}>=({children}) => {
    const scrollY = useSharedValue(0);
    const scrollYGlobal = useSharedValue(0);
    const scrollToTop = () => {
        scrollY.value = withTiming(0, {duration: 300})
    }

    return (
        <SharedStateContext.Provider value={{scrollY, scrollYGlobal, scrollToTop}}>
            {children}
        </SharedStateContext.Provider>
    )
}

export const useShareState = () => {
    const context = useContext(SharedStateContext);
    if(context === undefined) {
        throw new Error('useSharedState must be used within a SharedStateProvider');
    }
    return context;
}