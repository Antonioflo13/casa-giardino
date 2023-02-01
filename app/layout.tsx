//CSS
import "./globals.css";
//COMPONENTS
import Layout from "@/components/Layout";
import Provider from "@/app/provider";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
