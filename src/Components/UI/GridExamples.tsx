import { Card } from "anshu-reactui";
import { CodeViewer } from "../CodeViewer/CodeViewer";

interface GridExamplesProps {
  gridCols: string[];
  gridRows: string[];
}

export function GridExamples({ gridCols, gridRows }: GridExamplesProps) {
  return (
    <>
      <Card padding="p-2" className="my-2">
        <h2 className="text-xl my-4 font-semibold">Grid (grid / grid-cols-* / grid-rows-*)</h2>
        <h3 className="font-medium mb-2">Columns examples</h3>
        <div>
          {gridCols.slice(0, 6).map((c, idx) => (
            <div key={c} className="border rounded p-3 my-1 text-sm md:text-base">
              <div className="text-sm font-mono mb-2">{`<div className="grid ${c} gap-3"> ...children </div>`}</div>
              <div className={`grid ${c} gap-3`}>
                {Array.from({ length: idx + 1 }).map((_, i) => (
                  <div key={i} className="bg-red-100 p-3 ">
                    item {i + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-sm text-slate-500 mt-2">
            Tip: use <code>md:grid-cols-3</code> for responsive columns.
          </div>
        </div>

         <h3 className="font-medium mb-2">Rows examples</h3>
        <div>
          {gridRows.map((r) => (
                <div key={r} className="border my-2 rounded p-3">
                  <div className="text-sm font-mono mb-2 w-1/2 h-20">
                    <CodeViewer language="html" height="100%"  code={`<div className="grid ${r} gap-3"> ...children </div>`}/>
                    </div>
                  <div className={`grid ${r} gap-3`} style={{ minHeight: 120 }}>
                    <div className="bg-rose-100 p-3">row 1</div>
                    <div className="bg-rose-200 p-3">row 2</div>
                    <div className="bg-rose-300 p-3">row 3</div>
                  </div>
                </div>
              ))}
        </div>
      </Card>
      
    </>

  );
}