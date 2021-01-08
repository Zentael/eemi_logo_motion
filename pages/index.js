import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="eemi_ball"><div></div></div>
        <h1 className="title">
          Pour découvrir la première école digitale, commencez ici
        </h1>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          margion: 0 auto;
        }

        #eemi_ball{
          height: 60px;
          display:flex;
        }

        #eemi_ball > div{
          height: 30px;
          width: 30px;
          background-color: #15163A;
          border-radius: 50%;
          margin: 0 auto;
          align-self:end;

          animation-duration: 0.5s;
          animation-name: bounce;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: cubic-bezier(0.8, 0.4, 0.8, 0.4);
        }

        @keyframes bounce {
          from {
            margin-bottom: 15px;
          }
        
          to {
            margin-bottom: 0;
          }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
