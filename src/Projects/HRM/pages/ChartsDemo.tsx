import React, { useState } from "react";
import {
  stats,
  performance,
  upcomingEvents,
  meetings,
  employees,
  recruitment,
  eventList,
  sourceOverview,
} from "../Data/Data";

function ChartsDemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <header className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">HRM Dashboard</h1>
        <button
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Theme
        </button>
      </header>

      <main className="p-4 max-w-7xl mx-auto grid gap-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(stat => (
            <div key={stat.label} className="rounded-xl shadow p-6 bg-white dark:bg-gray-800 flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
              <span className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">{stat.value}</span>
              <span className="text-sm mt-1 text-green-500 dark:text-green-400">{stat.change}</span>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <PerformanceChart /> */}
          <div className="rounded-xl shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">Upcoming Events</h2>
            <ul>
              {upcomingEvents.map(ev => (
                <li key={ev.title} className="flex items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-xl text-indigo-500 dark:text-indigo-400 mr-3">{ev.date}</span>
                  <div>
                    <span className="text-gray-800 dark:text-gray-100">{ev.title}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{ev.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">Event List</h2>
            <ul>
              {eventList.map(ev => (
                <li key={ev.name} className="flex justify-between items-center py-2">
                  <span className="text-gray-800 dark:text-gray-100">{ev.name} ({ev.date})</span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">{ev.type}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">Source Overview</h2>
            <p>
              <span className="text-green-500 font-bold">{sourceOverview.thisMonth}%</span> this month &nbsp;
              <span className="text-red-500 font-bold">{sourceOverview.lastMonth}%</span> last month
            </p>
            <div className="mt-2 flex space-x-2">
              {sourceOverview.channels.map(ch => (
                <span key={ch} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">{ch}</span>
              ))}
            </div>
          </div>
          <div className="rounded-xl shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">Today's Meetings</h2>
            <ul>
              {meetings.map(m => (
                <li key={m.title} className="flex items-center justify-between py-2">
                  <span className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
                    <span className="text-xl">{m.icon}</span> {m.title}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{m.time}</span>
                  <button className="ml-2 px-2 py-1 bg-indigo-500 dark:bg-indigo-700 text-white rounded text-sm">Call Now</button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">Recruitment Pipeline</h2>
            <ul>
              <li>Total Applications: <span className="font-bold text-indigo-500">{recruitment.totalApplications}</span></li>
              <li>Recruited: <span className="font-bold text-green-500">{recruitment.recruited}</span></li>
              <li>Short Listed: <span className="font-bold text-yellow-500">{recruitment.shortListed}</span></li>
              <li>Rejected: <span className="font-bold text-red-500">{recruitment.rejected}</span></li>
              <li>Blocked: <span className="font-bold text-gray-500">{recruitment.blocked}</span></li>
              <li>Interviewed: <span className="font-bold text-blue-500">{recruitment.interviewed}</span></li>
            </ul>
          </div>

          <div className="rounded-xl shadow p-6 bg-white dark:bg-gray-800 overflow-auto">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">Employee Directory</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 px-2 text-left">ID</th>
                  <th className="py-2 px-2 text-left">Name</th>
                  <th className="py-2 px-2 text-left">Position</th>
                  <th className="py-2 px-2 text-left">Department</th>
                  <th className="py-2 px-2 text-left">Email</th>
                  <th className="py-2 px-2 text-left">Status</th>
                  <th className="py-2 px-2 text-left">Contact</th>
                  <th className="py-2 px-2 text-left">Salary</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-1 px-2">{emp.id}</td>
                    <td className="py-1 px-2">{emp.name}</td>
                    <td className="py-1 px-2">{emp.position}</td>
                    <td className="py-1 px-2">{emp.dept}</td>
                    <td className="py-1 px-2">{emp.email}</td>
                    <td className={`py-1 px-2 ${emp.status === 'Active' ? "text-green-500" : "text-red-500"}`}>{emp.status}</td>
                    <td className="py-1 px-2">{emp.contact}</td>
                    <td className="py-1 px-2">{emp.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 mt-8">
        Copyright © 2025 Meno. Designed with ♥ by Spnako. All rights reserved.
      </footer>
    </div>
  );
}

export default ChartsDemo;
