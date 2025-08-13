import {
  createContext,
  useContext,
} from 'react';

interface GuardedLinkContextType {
  timer: boolean;
  guardEnabled: boolean;
}

export const GuardedLinkContext = createContext<GuardedLinkContextType>({
  timer: false,
  guardEnabled: true
});

export const useGuardedLinkContext = () => {
  return useContext(GuardedLinkContext);
};