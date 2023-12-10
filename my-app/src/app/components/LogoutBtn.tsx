'use client'
type Props = {
    logout : any
}
export default function LogoutBtn({logout}: Props) {

    return (
        <div className="gap-5 mr-10">
            <button className="btn btn-error text-white" onClick={() => logout()}>Logout</button>
        </div>
    )
}