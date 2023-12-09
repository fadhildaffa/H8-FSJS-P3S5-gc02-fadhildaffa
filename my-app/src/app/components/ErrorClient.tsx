"use client";
import { useSearchParams } from "next/navigation";

export const ErrorClient = () => {
    const searchParams = useSearchParams();
    const errMessage = searchParams.get("error");

    return (
        <>
        {errMessage && (
            <p className="animate-pulse rounded text-red-400">
                {errMessage}
            </p>
        )}
        </>
    )
}