import { useEffect, useRef } from 'react';
import { useAssessmentStore } from '../store/useAssessmentStore';

export const useAssessmentTimer = () => {
  const status = useAssessmentStore(state => state.status);
  const isTimerActive = useAssessmentStore(state => state.isTimerActive);
  const tickTimer = useAssessmentStore(state => state.tickTimer);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (status === 'testing' && isTimerActive) {
      timerRef.current = setInterval(() => {
        tickTimer();
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [status, isTimerActive, tickTimer]);
};
