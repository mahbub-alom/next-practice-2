
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <Link href="/addproduct">Add Product</Link>
      <br/>
      <Link href="/products">See Product</Link>
    </main>
  )
}
