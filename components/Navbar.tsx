export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 24px",
      borderBottom: "1px solid #e5e7eb",
      backgroundColor: "#fff"
    }}>
      <span style={{ fontSize: "18px", fontWeight: 500 }}>
        🟡 TerraVaga
      </span>
      <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#6b7280" }}>
        <span>Vagas</span>
        <span>Empresas</span>
        <span>Profissionais</span>
      </div>
      <button style={{
        backgroundColor: "#d97706",
        color: "#fff",
        border: "none",
        padding: "8px 18px",
        borderRadius: "8px",
        fontSize: "14px",
        cursor: "pointer"
      }}>
        Publicar vaga
      </button>
    </nav>
  );
}