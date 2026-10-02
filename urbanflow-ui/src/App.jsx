function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F3F4F6",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          backgroundColor: "#111827",
          color: "white",
          padding: "24px",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>
          UrbanFlow
        </h1>

        <p
          style={{
            color: "#9CA3AF",
            marginBottom: "30px",
          }}
        >
          Traffic Intelligence
        </p>

        <nav>
          <p>Dashboard</p>
          <p>Live Intersection</p>
          <p>Traffic Analytics</p>
          <p>AI Agents</p>
          <p>Experiments</p>
          <p>Controllers</p>
          <p>Configuration</p>
          <p>Logs</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main
        style={{
          flex: 1,
          padding: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "8px",
          }}
        >
          Dashboard
        </h2>

        <p
          style={{
            color: "#6B7280",
            marginBottom: "28px",
          }}
        >
          Monitor intersections, traffic conditions, and controller status.
        </p>

        {/* Dashboard Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "10px",
            }}
          >
            <p style={{ color: "#6B7280" }}>Intersection Health</p>
            <h3 style={{ fontSize: "30px", margin: "10px 0" }}>4 / 4</h3>
            <p>All intersections operational</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "10px",
            }}
          >
            <p style={{ color: "#6B7280" }}>Current Signal Phase</p>
            <h3 style={{ fontSize: "30px", margin: "10px 0" }}>Northbound</h3>
            <p>Green · 18 seconds remaining</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "10px",
            }}
          >
            <p style={{ color: "#6B7280" }}>Traffic Overview</p>
            <h3 style={{ fontSize: "30px", margin: "10px 0" }}>124</h3>
            <p>Vehicles currently detected</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "10px",
            }}
          >
            <p style={{ color: "#6B7280" }}>Active Alerts</p>
            <h3 style={{ fontSize: "30px", margin: "10px 0" }}>2</h3>
            <p>Requires operator attention</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "10px",
            }}
          >
            <p style={{ color: "#6B7280" }}>Controller Status</p>
            <h3 style={{ fontSize: "30px", margin: "10px 0" }}>ACTIVE</h3>
            <p>AI controller connected</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App