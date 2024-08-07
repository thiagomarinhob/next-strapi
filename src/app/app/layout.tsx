import { Footer } from "@/components/custom/Footer";
import { Header } from "@/components/custom/Header";
import { getGlobalPageData } from "@/data/loaders";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode;
  }) {
  const globaldata = await getGlobalPageData()
  return (
    <>
      <Header data={globaldata.header} />
      <div className="h-screen grid grid-cols-[240px_1fr]">
        <nav className="border-r bg-background dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className="flex items-center text-black font-bold gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/app/dashboard"
                >
                  <ViewIcon className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  className="flex items-center text-black font-bold gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/app/caixa"
                >
                  <ViewIcon className="h-4 w-4" />
                  Caixa
                </Link>
                <Link
                  className="flex items-center gap-3 text-black font-bold rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/app/dashboard/account"
                >
                  <UsersIcon className="h-4 w-4" />
                  Account
                </Link>
                <Link
                  className="flex items-center gap-3 text-black font-bold rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/app/products"
                >
                  <UsersIcon className="h-4 w-4" />
                  Produtos
                </Link>
              </nav>
            </div>
          </div>
        </nav>
      
        <main className="flex flex-col overflow-scroll p-4">{children}</main>
      </div>
      <Footer data={globaldata.footer} />
    </>
  );
}

function LayoutDashboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function PieChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ViewIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}