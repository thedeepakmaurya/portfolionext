import "./globals.css";
import Sidenav from "@/components/SideNav";
import { Comfortaa } from "next/font/google";
import 'remixicon/fonts/remixicon.css'

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const metadata = {
  title: "Deepak Maurya",
  description:
    "React.js developer, crafting dynamic user experiences with seamless performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={comfortaa?.className}
      >
        <Sidenav>{children}</Sidenav>
        <meta name="google-site-verification" content="AKJzXLR56cBvKAyymdgZB1914DXZvxOj7WgGuDyqINw" />
      </body>
    </html>
  );
}
