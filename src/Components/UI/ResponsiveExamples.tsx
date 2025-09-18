export function ResponsiveExamples() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Responsive examples (quick)</h2>
      <div className="border p-3 rounded">
        <div className="text-sm font-mono mb-2">{`<div className="grid grid-cols-1 md:grid-cols-3 gap-3">...</div>`}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-cyan-200 p-4">1</div>
          <div className="bg-cyan-300 p-4">2</div>
          <div className="bg-cyan-400 p-4">3</div>
        </div>
      </div>
    </section>
  );
}