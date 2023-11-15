export default function getDomain(){
    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV ===
    "production" ? "https" : "http"
    const domain = process.env.NEXT_PUBLIC_VERCEL_URL ?  process.env.
    NEXT_PUBLIC_VERCEL_URL: "next-connect-iota.vercel.app"
    return `${protocol}://${domain}`
}