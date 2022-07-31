import React, { createContext, ReactNode } from 'react';
import { AlertT, AlertContextI, AlertCreatedT } from 'types';

function generateId(len = 5) {
  return Math.random()
    .toString(36)
    .slice(2, len + 2);
}

const { Context, Provider } = (function () {
  function createAlert({ type, title, description }: AlertT): AlertCreatedT {
    return {
      type,
      title,
      description,
      key: generateId(),
    };
  }
  // @ts-ignore
  const Context = createContext<AlertContextI>();
  const Provider = ({ children }: { children: ReactNode }) => {
    const [alerts, setAlerts] = React.useState<Array<AlertCreatedT>>([]);
    const showInfo = ({ title, description }: { title: string; description: string }) => {
      setAlerts((alerts) => alerts.concat(createAlert({ type: 'INFO', title, description })));
    };
    const showError = ({ title, description }: { title: string; description: string }) => {
      setAlerts((alerts) => alerts.concat(createAlert({ type: 'ERROR', title, description })));
    };
    const showSuccess = ({ title, description }: { title: string; description: string }) => {
      setAlerts((alerts) => alerts.concat(createAlert({ type: 'SUCCESS', title, description })));
    };
    const dismiss = (key: string) => {
      setAlerts((alerts) => alerts.filter((alert) => alert.key !== key));
    };
    return (
      <AlertContext.Provider
        value={{
          alerts,
          showInfo,
          showError,
          showSuccess,
          dismiss,
        }}
      >
        {children}
      </AlertContext.Provider>
    );
  };
  return {
    Context,
    Provider,
  };
})();

export const AlertContext = Context;
export const AlertProvider = Provider;
