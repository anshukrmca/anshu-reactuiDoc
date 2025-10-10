import React, { useState, useMemo } from "react";
import { Input } from "anshu-reactui/lib";
import DynamicIcon from "../../Components/Icons/DynamicIcon";

/** FAQ item type */
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Sample FAQ data */
const faqData: FaqItem[] = [
  { id: "1", question: "What is your return policy?", answer: "You can return items within 30 days of purchase. Items must be unused and in original packaging." },
  { id: "2", question: "How do I track my order?", answer: "Track your order via your account dashboard or using the tracking link in your email." },
  { id: "3", question: "Do you offer international shipping?", answer: "Yes! Shipping fees vary depending on location and package weight." },
  { id: "4", question: "Can I change or cancel my order?", answer: "Orders can be changed/canceled within 2 hours of placing them. Contact support immediately." },
];

/** Demo FAQ Page */
const DemoFaqPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  /** Filter FAQ items by search text */
  const filteredFaqs = useMemo(
    () =>
      faqData.filter(
        (faq) =>
          faq.question.toLowerCase().includes(search.toLowerCase()) ||
          faq.answer.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  /** Toggle FAQ open/close */
  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen w-full p-4 bg-gray-50 dark:bg-slate-900">
      {/* ---------- Header ---------- */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
          Find answers to the most commonly asked questions about our services and policies.
        </p>
      </section>

      {/* ---------- Search Input ---------- */}
      <section className="mb-6">
        <Input
          type="text"
          placeholder="Search FAQ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </section>

      {/* ---------- Live FAQ ---------- */}
      <section className="w-full space-y-3 mb-8">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(faq.id)}
                className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
              >
                <span className="text-gray-900 dark:text-white font-medium">{faq.question}</span>
                <DynamicIcon
                  name={isOpen ? "FaMinus" : "FaPlus"}
                  size={16}
                  className="text-gray-600 dark:text-gray-300"
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden px-4 ${
                  isOpen ? "py-2 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-200 text-sm">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ---------- Props Table ---------- */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">🧾 Props</h2>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-200 dark:bg-slate-600">
              <th className="border px-2 py-1">Prop</th>
              <th className="border px-2 py-1">Type</th>
              <th className="border px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-slate-700">
              <td className="border px-2 py-1">id</td>
              <td className="border px-2 py-1">string</td>
              <td className="border px-2 py-1">Unique identifier for each FAQ item</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-slate-600">
              <td className="border px-2 py-1">question</td>
              <td className="border px-2 py-1">string</td>
              <td className="border px-2 py-1">The FAQ question text</td>
            </tr>
            <tr className="bg-white dark:bg-slate-700">
              <td className="border px-2 py-1">answer</td>
              <td className="border px-2 py-1">string</td>
              <td className="border px-2 py-1">The FAQ answer text</td>
            </tr>
          </tbody>
        </table>
      </section>

     
      {/* ---------- Notes ---------- */}
      <section className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-700 dark:text-blue-200">
          💡 Tip: Use <code>DynamicIcon</code> for plus/minus toggles. Customize the style with Tailwind dark/light classes. Supports responsive design and smooth open/close animations.
        </p>
      </section>
    </div>
  );
};

export default DemoFaqPage;
