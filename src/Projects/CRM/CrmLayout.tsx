import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { Loading } from "anshu-reactui";
import UrlReferrerCheck from "../../CustomeHooks/UrlReferrerCheck";

const CrmLayout: React.FC = () => {
  return (
    <UrlReferrerCheck>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-4">
          Sidebar
          <Link to="/crm/contacts" className="block mt-2 text-blue-600 hover:underline">
            Dashboard
          </Link>
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          <header className="bg-white dark:bg-gray-800 shadow p-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              CRM Module
            </h1>
          </header>

          {/* Nested Routes Render Here with Guard */}
          <main className="p-4">
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </UrlReferrerCheck>
  );
};

export default CrmLayout;
