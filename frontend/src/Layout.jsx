import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Upload from "./components/Upload";

function Layout() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Chat />
        <Upload />
      </div>
    </>
  );
}

export default Layout;