import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import MobileNav from "@/components/layout/MobileNav";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[#050706] text-white">
            <Sidebar />

            <div className="lg:pl-[260px]">
                <Topbar />

                <main className="min-h-screen px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-10">
                    <div className="mx-auto w-full max-w-[1500px]">
                        {children}
                    </div>
                </main>
            </div>

            <MobileNav />
        </div>
    );
}