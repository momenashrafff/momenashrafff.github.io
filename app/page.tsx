'use client'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Under Construction</title>
        <meta name="description" content="Our site is under construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Under Construction</h1>
        <p>We are working hard to launch our new website. Stay tuned!</p>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f8f8f8;
        }
        h1 {
          color: #333;
          font-size: 2.5em;
        }
        p {
          color: #666;
          font-size: 1.2em;
        }
      `}</style>
    </div>
  )
}
