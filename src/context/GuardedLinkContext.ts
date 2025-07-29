import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

interface GuardedLinkContextType {
  fragmentOffset: number;
  setFragmentOffset: Dispatch<SetStateAction<number>>
}

export const GuardedLinkContext = createContext<GuardedLinkContextType>({
  fragmentOffset: 0,
  setFragmentOffset:  () => {}
});

export const useGuardedLinkContext = () => {
  return useContext(GuardedLinkContext);
};