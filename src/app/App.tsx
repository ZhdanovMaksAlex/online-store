import { AppHeader } from "../components/AppHeader";

import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.App}>
      <AppHeader />
    </div>
  );
};
