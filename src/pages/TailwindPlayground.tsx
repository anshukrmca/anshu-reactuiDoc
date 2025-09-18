
const TailwindPlayground = () => {
   return (
    <div className="p-8 space-y-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Background and Text Colors */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-theme-primary">Colors Demo</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-red-500 text-white p-4 rounded">bg-red-500 text-white</div>
          <div className="bg-blue-200 text-blue-900 p-4 rounded">bg-blue-200 text-blue-900</div>
          <div className="bg-green-100 text-green-700 p-4 rounded">bg-green-100 text-green-700</div>
          <div className="bg-purple-600 text-purple-100 p-4 rounded">bg-purple-600 text-purple-100</div>
          <div className="bg-yellow-300 text-yellow-900 p-4 rounded">bg-yellow-300 text-yellow-900</div>
        </div>
      </section>

      {/* Width, Height, Borders */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Sizing & Borders</h2>
        <div className="flex gap-6 flex-wrap">
          <div className="w-40 h-40 bg-teal-300 border-4 border-teal-700 rounded-lg flex items-center justify-center">
            40x40 w/h, border-4, rounded-lg
          </div>
          <div className="w-32 h-32 bg-pink-200 border-2 border-pink-600 rounded-full flex items-center justify-center">
            32x32 w/h, border-2, rounded-full
          </div>
          <div className="w-48 h-24 bg-orange-400 border border-orange-900 rounded-md flex items-center justify-center">
            48x24 w/h, border, rounded-md
          </div>
        </div>
      </section>

      {/* Text Sizes, Fonts, Alignment */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Typography</h2>
        <p className="text-xs font-thin text-gray-600">Text xs, font-thin</p>
        <p className="text-base font-normal text-gray-800">Text base, font-normal</p>
        <p className="text-lg font-semibold text-gray-900 text-center">Text lg, font-semibold, centered</p>
        <p className="text-xl font-bold text-purple-700 text-right">Text xl, font-bold, right aligned</p>
        <p className="text-2xl font-extrabold text-red-600 italic">Text 2xl, font-extrabold, italic</p>
      </section>

      {/* Spacing (margin, padding) */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Spacing</h2>
        <div className="bg-gray-200 p-6 rounded space-y-4">
          <div className="bg-white p-4 m-2 border border-gray-400 rounded">Padding 4, margin 2</div>
          <div className="bg-white p-8 m-4 border border-gray-500 rounded">Padding 8, margin 4</div>
          <div className="bg-white p-2 m-1 border border-gray-300 rounded">Padding 2, margin 1</div>
        </div>
      </section>

      {/* Flexbox and Grid */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Flex & Grid</h2>
        <div className="flex space-x-4">
          <div className="flex-1 bg-indigo-300 p-4 rounded">Flex 1</div>
          <div className="flex-1 bg-indigo-500 p-4 rounded">Flex 1</div>
          <div className="flex-1 bg-indigo-700 p-4 rounded">Flex 1</div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-pink-300 p-4 rounded">Grid 1</div>
          <div className="bg-pink-500 p-4 rounded">Grid 2</div>
          <div className="bg-pink-700 p-4 rounded">Grid 3</div>
        </div>
      </section>

      {/* Animations */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Animations</h2>
        <div className="flex space-x-6 items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <div className="animate-ping bg-red-500 rounded-full h-12 w-12"></div>
          <div className="animate-pulse bg-green-500 rounded-full h-12 w-12"></div>
          <div className="animate-bounce bg-purple-500 rounded-full h-12 w-12"></div>
        </div>
      </section>

      {/* Transition and Easing */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Transitions & Easing</h2>
        <button className="bg-primary text-white px-6 py-3 rounded transition duration-300 ease-in-out hover:bg-secondary">
          Hover me
        </button>
      </section>
    </div>
  );
}

export default TailwindPlayground