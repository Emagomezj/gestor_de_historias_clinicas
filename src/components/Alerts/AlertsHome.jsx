import alerts from "../../data/alerts";

import AlertMiniature from "./AlertMiniature";

export const AlertsHome = () => {
  return (
    <div className="alertsHome">
      {alerts.map((elem) => (
        <AlertMiniature alert={elem} key={elem.id} />
      ))}
    </div>
  );
};
