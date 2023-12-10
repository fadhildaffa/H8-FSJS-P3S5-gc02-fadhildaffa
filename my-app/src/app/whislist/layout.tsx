import { PageProtected } from "../components/PageProtecting"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <PageProtected>
                {children}
            </PageProtected>
        </>
    )
}