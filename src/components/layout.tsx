import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
