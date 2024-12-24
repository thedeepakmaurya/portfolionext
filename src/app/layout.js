import "./globals.css";
import Sidenav from "@/components/SideNav";
import { Montserrat } from "next/font/google";
// In _app.js or in your component
import 'boxicons/css/boxicons.min.css';

const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata = {
  title: "Deepak Maurya",
  description:
    "React.js developer, crafting dynamic user experiences with seamless performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat?.className}
      >
        <Sidenav>{children}</Sidenav>
        <meta name="google-site-verification" content="AKJzXLR56cBvKAyymdgZB1914DXZvxOj7WgGuDyqINw" />
      </body>
    </html>
  );
}
