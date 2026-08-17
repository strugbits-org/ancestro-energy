import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function SolarLayout({ children }) {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
