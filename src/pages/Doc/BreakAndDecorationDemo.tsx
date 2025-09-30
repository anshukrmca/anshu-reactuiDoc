import React from 'react';
import { CodeViewer } from '../../Components/CodeViewer/CodeViewer';

const BreakAndDecorationDemo: React.FC = () => {
    return (
        <div className="space-y-10 px-6 py-8">
            <h1 className="text-3xl font-bold">Tailwind CSS Box Decoration Utilities</h1>
            <p className="text-gray-700 dark:text-gray-300">
                Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.
            </p>

            {/* box-decoration-break */}
            <section>
                <h3 id="basic-example"><a href="#basic-example" className="anchor">Basic example</a></h3>
                <p>Use the <code>box-decoration-slice</code> and <code>box-decoration-clone</code> utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks:</p>

                <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <div className="space-y-4">
                        <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white">
                            Hello
                            <br />
                            World
                        </span>
                        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white">
                            Hello
                            <br />
                            World
                        </span>
                    </div>

                    <CodeViewer
                        code={`<span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white">
  Hello
  <br />
  World
</span>
<span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white">
  Hello
  <br />
  World
</span>`}
                    />
                </div>


            </section>
        </div>
    );
};

export default BreakAndDecorationDemo;
