import React from 'react';
import { CodeViewer } from '../../../Components/CodeViewer/CodeViewer';
import { Card, hexToRgba,FileInput } from 'anshu-reactui';
import { useAppSelector } from '../../../CustomeHooks/Hooks';

const FileInputDocsPage: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

  const handleFileChange = (file: File | null) => {
    if (file) {
      console.log('Selected file:', file.name);
    }
  };

  return (
    <>
      <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
      >
        <h1 className="text-3xl font-bold my-4">File Input Component Documentation</h1>

        {/* Description */}
        <section className="space-y-2 my-2">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p>
            The <code>FileInput</code> component allows users to select a file from their system.
            It supports:
          </p>
          <ul className="list-disc pl-6">
            <li>Type validation via <code>allowTypes</code></li>
            <li>Image preview via <code>Avatar</code></li>
            <li>View file info in console (<code>view</code> prop)</li>
            <li>Download file (<code>download</code> prop)</li>
          </ul>
        </section>

        {/* Props Table */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Props</h2>
          <table className="w-full border border-gray-300 dark:border-gray-600 text-left text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border-b">Prop</th>
                <th className="px-4 py-2 border-b">Type</th>
                <th className="px-4 py-2 border-b">Default</th>
                <th className="px-4 py-2 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-b">label</td>
                <td className="px-4 py-2 border-b">string</td>
                <td className="px-4 py-2 border-b">undefined</td>
                <td className="px-4 py-2 border-b">Label displayed above the file input.</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-b">error</td>
                <td className="px-4 py-2 border-b">boolean</td>
                <td className="px-4 py-2 border-b">false</td>
                <td className="px-4 py-2 border-b">Displays error styling/message.</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-b">allowTypes</td>
                <td className="px-4 py-2 border-b">string[]</td>
                <td className="px-4 py-2 border-b">[]</td>
                <td className="px-4 py-2 border-b">Allowed file types/extensions. Example: ['.jpg', 'application/pdf']</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-b">onChangeFile</td>
                <td className="px-4 py-2 border-b">(file: File | null) = void</td>
                <td className="px-4 py-2 border-b">undefined</td>
                <td className="px-4 py-2 border-b">Callback when a file is selected or cleared.</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-b">view</td>
                <td className="px-4 py-2 border-b">boolean</td>
                <td className="px-4 py-2 border-b">false</td>
                <td className="px-4 py-2 border-b">If true, a "View" button logs file info in console.</td>
              </tr >
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border-b">download</td>
                <td className="px-4 py-2 border-b">boolean</td>
                <td className="px-4 py-2 border-b">false</td>
                <td className="px-4 py-2 border-b">If true, a "Download" button is shown to download the file.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Demo */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold my-2">Demo</h2>
          <div className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg">
            <FileInput
              label="Upload your file"
              allowTypes={['.jpg', '.jpeg', '.png', 'application/pdf', '.csv']}
              view={true}
              download={true}
              onChangeFile={handleFileChange}
              className=''
            />
          </div>
        </section>

        <section>
          <h1 className='my-2'>Complete Code</h1>
          <CodeViewer code={`
import React, { useRef } from 'react';
import { FileInput } from 'anshu-reactui';

const App: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (file) {
      console.log('Selected file:', file.name);
      console.log('Type:', file.type);
      console.log('Size:', file.size, 'bytes');
    } else {
      console.log('File cleared');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">FileInput Example</h2>

      <FileInput
        ref={fileInputRef}                    // Optional ref
        label="Upload your file"              // Label above input
        error={false}                         // Show error state
        allowTypes={['.jpg', '.jpeg', '.png', 'application/pdf']} // Allowed file types
        view={true}                           // Enable 'View' button to log file info
        download={true}                       // Enable 'Download' button
        onChangeFile={handleFileChange}       // Callback when file changes
        className=''                          // custom design
      />
    </div>
  );
};

export default App;
  `} />
        </section>

        <section className="text-gray-500 text-sm">
          <p>Check console when you click "View" to see file details.</p>
        </section>
      </Card>
    </>

  );
};

export default FileInputDocsPage;
