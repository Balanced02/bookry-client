import { AlertContext } from 'context/AlertContext';
import React, { useRef } from 'react';
import { AlertCreatedT } from 'types';
import './styles.scss';

export const AlertsContainer = () => {
  const maxAlertsCount = 5;
  const { alerts, dismiss } = React.useContext(AlertContext);

  if (alerts.length === 0) return null;

  const alertsChunk = alerts.slice(0, maxAlertsCount);
  const handleDismiss = (key: string) => dismiss(key);

  return (
    <div className="alerts-container">
      {alertsChunk.map((alert) => (
        <Alert key={alert.key} alert={alert} onDismiss={handleDismiss} />
      ))}
    </div>
  );
};

const Alert = ({ alert, onDismiss }: { alert: AlertCreatedT; onDismiss: (key: string) => void }) => {
  const [visible, setVisible] = React.useState(false);
  const visibleRef = useRef(false);
  const dTimeout = useRef<ReturnType<typeof setTimeout>>();

  const toggleVisibility = (value: boolean) => {
    setVisible(value);
    visibleRef.current = value;
  };

  React.useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => toggleVisibility(true), 100);
    const dismissTimeout: ReturnType<typeof setTimeout> = setTimeout(handleDismiss, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(dismissTimeout);
      clearTimeout(dTimeout.current);
    };
  }, []);

  const handleDismiss = () => {
    if (visibleRef.current) {
      setVisible(false);
      dTimeout.current = setTimeout(() => onDismiss(alert.key), 200);
    }
  };

  return (
    <div className={`alert alert-${alert.type} ${visible ? 'visible' : ''}`}>
      <div className="alert__bar"></div>
      <div className="alert__body">
        <div className="alert__title">{alert.title}</div>
        <div className="alert__description text-secondary">{alert.description}</div>
      </div>
      <div className="alert__end">
        <button className="close-btn" onClick={handleDismiss}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="M16,16 L48,48 M48,16 L16,48" fill="none" strokeWidth="8" />
          </svg>
        </button>
      </div>
    </div>
  );
};
