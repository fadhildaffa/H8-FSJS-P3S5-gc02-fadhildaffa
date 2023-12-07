import Link from "next/link"

export default function ProductCards() {
    return (
        <>
        <Link href='/products/slug'>
        <div className="card w-96 bg-base-100 shadow-xl border border-zinc-500 p-3">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div >28 jul</div>
          </div>
        </div>
      </div>
      </Link>
      <div className="card w-96 bg-base-100 shadow-xl border border-zinc-500 p-3">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div >28 jul</div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border border-zinc-500 p-3">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div >28 jul</div>
          </div>
        </div>
        </div>
        </>
    )
}