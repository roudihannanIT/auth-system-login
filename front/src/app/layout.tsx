import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster position='top-center' />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
