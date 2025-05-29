import { verifySession } from '@/shared/actions/session'
import { AppSidebar } from '@/shared/ui/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import './admin.globals.css'

const interFont = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    title: {
        template: '%s | Панель администратора',
        default: 'Главная | Панель администратора',
      },
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {userName} = await verifySession()
  return (
    <html lang="ru">
      <body
        className={`${interFont.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar userName={userName} />
          <main className='w-full overflow-x-hidden'>
            <SidebarTrigger />
            {children}
          </main>
      </SidebarProvider>
      </body>
    </html>
  );
}
