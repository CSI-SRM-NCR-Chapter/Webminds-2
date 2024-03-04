import Catalog from "./Catalog";
import Sidebar from "./Sidebar";
export default function CatalogPage() {
    return (
        <main className="w-screen min-h-screen flex pt-[100px] justify-between">
            <Sidebar />
            <Catalog />
        </main>
    )
}