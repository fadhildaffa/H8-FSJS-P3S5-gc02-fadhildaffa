import NavbarLogin from "../components/NavbarLogin"
import ProductCards from "../components/ProductCard"


export default function () {
    return (
        <>
            <NavbarLogin />
            <div className="flex flex-row gap-5 flex-wrap p-6">
                <ProductCards />
            </div>
        </>
    )
}