import Head from 'next/head'

export default function Home() {
  
  function on_ball_click(){
    console.log("ball clicked !")
    const ball = document.getElementById("eemi_ball");
    ball.addEventListener("animationiteration", on_gif_appear); 
  }
  
  function on_gif_appear(){
    const ball = document.getElementById("eemi_ball");
    const gif = document.getElementById("eemi_gif");
    const title = document.getElementById("title");
    ball.style.animation = "none";
    title.style.opacity = "0"
    setTimeout(function(){
      ball.style.display = "none";
      title.style.display = "none"
      document.getElementById("eemi_ball_container").style.display = "none";
      gif.style.display = "block";
      const gif_img = document.createElement('img');
      gif_img.setAttribute("src", "/eemi_logo.gif");
      gif.appendChild(gif_img);

    }, 1000);
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main onClick = {on_ball_click}>
        <div id="eemi_ball_container"><div id="eemi_ball"></div></div>
        
          <div id="eemi_gif"></div>
         
        
        <h1 id="title">
          Pour découvrir la première école digitale, commencez ici
        </h1>
      </main>
      <style jsx>{`
        .container {
          
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }

        main {
          
          margion: 0 auto;
        }

        #title{
          transition: 1s;
        }

        #eemi_ball_container{
          margin-top:80px;
          height: 45px;
          display:flex;
        }

        #eemi_ball {
          height: 30px;
          width: 30px;
          background-color: #15163A;
          border-radius: 50%;
          margin: 0 auto;
          align-self:end;

          animation-duration: 0.5s;
          animation-name: bounce;
          animation-iteration-count: infinite;
          animation-direction: forwards;
          animation-timing-function: cubic-bezier(0.42,0,0.58,1);
        }

        @keyframes bounce {
          0% {
            margin-bottom: 0;
          }
        
          50% {
            margin-bottom: 15px;
          }

          100% {
            margin-bottom: 0;
          }
        }

        #eemi_gif{
          margin-top:0;
          margin-left:16px;
          
          display:none;
        }

        #eemi_gif > img{
          height: 540px;
          width: calc(100%-16px);
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
            
              background-color: #000;
              color: #fff;
            
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
