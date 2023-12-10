"use client"
import Swal from 'sweetalert2'

type Props = {
    isLoggingIn: boolean;
    confirmed: any
};

export default function WhislistButton({ isLoggingIn, confirmed }: Props) {
    // console.log(isLoggingIn, "<< hasil login")
    
    const toWishlist = async () => {
        if (isLoggingIn === true) {
           await confirmed()

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please Loggin First',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
    }

    return (
        <div onClick={() => toWishlist()} className='cursor-pointer'>
            <h3 className="text-red-600 font-bold">
                Whislist
            </h3>
        </div>
    )
}