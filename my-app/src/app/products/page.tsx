import NavbarLogin from "../components/NavbarLogin"
import ProductCards from "../components/ProductCard"



export default function Products() {
    
    return (
        <>
            <NavbarLogin />
            <div className="flex flex-wrap gap-3 justify-around p-6">
                {/* <ProductCards /> */}
            </div>
            <div className="flex justify-end pr-10 pr-56">
                <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>
            
        </>
    )
}