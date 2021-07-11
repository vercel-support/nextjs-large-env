import service from "../service-account.enc"

export async function getStaticProps() {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/decrypt`, {
    method: "POST", headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({ data: service.encrypted })
  });
  let data = await res.json();
  return {
    props: {
      data,
    },
  }
}


export default function Home({ data }) {
  return (
    <div>
      <h2>Saving large environment variables</h2>
      <h3>Auth-uri: {data.auth_uri}</h3>
    </div>
  )
}
