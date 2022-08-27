import { useRouter } from "next/router";

import Sidebar from "../SideBar/Sidebar";

import Navbar from "../Navbar/Navbar";

import styles from "./Layout.module.css";
import { DisplaySection } from "../DisplaySection/DisplaySection";

// export default function Layout({children}) {
//   return (
//     <div className={styles.app}>
//       <div className={styles.leftbar}>
//         <Sidebar />
//       </div>

//       <div className={styles.rightbar}>
//         <Navbar />

//         <div className={styles.belownav}>
//           <h1>Hyyyyy</h1>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

export const Layout = ({ children }) => {
  // const router = useRouter();
  return (
    <div className={styles.app}>
      <Sidebar />

      <div className={styles.rightbar}>
        <Navbar />

        <DisplaySection>{children}</DisplaySection>
      </div>
    </div>
  );
};
