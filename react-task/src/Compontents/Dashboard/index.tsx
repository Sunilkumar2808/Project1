import React from "react"
import Sildebar from "../Slidebar";
import Dashboardmain from "../Main";
import Header from "../header";
import styles from "./styles.module.css"
const Dashboard = () => {
  return (
    <div className={styles.App}>
      <div className={styles.header}><Header /></div>
      <div className={styles.conatiners}>
        <aside className={styles.drawer}><Sildebar /></aside>
        <main className={styles.main}><Dashboardmain /></main>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}
export default Dashboard;