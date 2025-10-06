import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading, Spinner } from "anshu-reactui";

const CrmLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        Sidebar
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-bold">CRM Module</h1>
        </header>

        {/* Nested Routes Render Here with local fallback */}
        <main className="p-4">
          <Suspense fallback={<Loading/>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default CrmLayout;
