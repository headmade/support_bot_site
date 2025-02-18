import type { Metadata } from "next";
import "@fontsource-variable/montserrat";
import "./globals.scss";
import { AntdRegistry } from '@ant-design/nextjs-registry';


export const metadata: Metadata = {
  title: "Support Bot by HeadMade",
  description: "Support Bot — удобная поддержка прямо в Telegram | Позвольте клиентам легко задавать вопросы и получать ответы от админов без лишних приложений и сложностей. 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AntdRegistry>
        {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
