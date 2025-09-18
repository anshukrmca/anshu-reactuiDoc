import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeViewerProps {
  code: string;               // the code string to display
  language?: string;           // e.g., "javascript", "html", "css"
  style?: any;                 // optional custom style
  wrapLines?: boolean;          // wrap long lines
  showLineNumbers?: boolean;    // show line numbers
  height?: string | number; // e.g., "400px" or "50vh"
  width?: string | number;  // e.g., "100%" or "600px"
}

export function CodeViewer({
  code,
  language = "html",
  style = monokai,
  wrapLines = false,
  showLineNumbers = false,
  height = "",
  width = "100%", 
}: CodeViewerProps) {
  return (
    <div className='scrollbar-hide' style={{ height, width, overflow: "auto",position:'relative' }}>
      <SyntaxHighlighter
        language={language}
        style={style}
        wrapLines={wrapLines}
        showLineNumbers={showLineNumbers}
        customStyle={{ minHeight: "100%", minWidth: "100%" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
