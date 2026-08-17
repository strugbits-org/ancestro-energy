import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function DonateLayout({ children }) {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            <Header />
            <main className="flex-grow">{children}</main>
        </div>
    );
}
