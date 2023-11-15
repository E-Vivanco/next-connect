export default function getDomain(){
    const protocol = process.env.DEVELOPMENT_ENV ===
    "production" ? "https" : "http"
    const domain = process.env.PUBLIC_DOMAIN ?  process.env.
    PUBLIC_DOMAIN: "localhost:3000"
    return `${protocol}://${domain}`
}