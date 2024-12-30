/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  await fetch("https://example.com/")
  return null;
}
