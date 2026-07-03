export default function Stats() {
  return (
    <div className="flex border-t border-b border-gray-200">
      {[
        { numero: "340+", label: "Vagas ativas" },
        { numero: "180", label: "Empresas" },
        { numero: "4.200", label: "Profissionais" },
        { numero: "12", label: "Estados" },
      ].map((item) => (
        <div key={item.label} className="flex-1 text-center py-4 border-r border-gray-200 last:border-r-0">
          <div className="text-xl font-medium text-amber-600">{item.numero}</div>
          <div className="text-xs text-gray-500 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}