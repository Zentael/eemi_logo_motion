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
    const content = document.getElementById("content");
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
      setTimeout(function(){
        gif_img.setAttribute("src", "/eemi_logo.png");
        gif_img.style.height = "540px";
        gif_img.style.width = "960px";
        gif_img.style.margin = "0 auto";
        gif_img.style.display = "block";
        content.style.display = "block";
        setTimeout(function(){
          gif_img.animate([
            // keyframes
            {
              height: "540px",
              width: "960px",
            },
            {
              height: "145px",
              width: "240px",
            }
          ], {
            // timing options
            duration: 1000,
            iterations: 1,
            fill: "forwards",
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          });
          setTimeout(function(){
            content.style.opacity = "1";
            content.style.marginTop = "0";  
          }, 1000)
        }, 1000)  
      }, 3200);
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
          Pour découvrir la filière CDO, cliquez ici
        </h1>
        <article id="content">
          
<h3 id="cdo">Qu'est-ce que la filière CDO ?</h3>
Le CDO (Chief Design Officer) met en place une approche créative, innovante et centrée sur l’utilisateur pour concevoir 
de nouveaux produits et solutions. Le programme <b id="cdo">CDO et Product Designer</b> a pour objectif de former des 
<b id="cdo"> profils hybrides</b>, dotés d’une solide <b id="cdo">compréhension des enjeux techniques</b> et capables d’évoluer dans des 
<b id="cdo"> environnements complexes</b> et <b id="cdo">évolutifs</b>. 
La formation permet d’acquérir les compétences techniques mais aussi <b id="cdo">managériales</b> pour piloter et mener à bien des 
projets stratégiques et répondre aux enjeux de transformation dans un monde numérique.
<br></br><br></br>
<h3 id="cdo">Infos pratiques</h3>
• <b id="cdo">Durée : </b>24 mois <br></br>

• <b id="cdo">Niveau d’admission :</b> Bac +3 en web design, multimédia, communication visuelle<br></br>

• <b id="cdo">450 heures de formation par an</b><br></br>

• <b id="cdo">Formation en alternance :</b> 1 semaine école / 3 semaines entreprise<br></br>

• <b id="cdo">Début des cours :</b> Septembre / Octobre<br></br><br></br>

Cycle validé par la certification professionnelle de niveau 7 « <b id="cdo">Manager de projets innovants</b> », 
code NSF 310m. Enregistrée au RNCP par arrêté du 07/04/2017 publié au J.O. du 21/04/2017 
sous l’autorité et délivré par EIMP. Certification accessible via le dispositif VAE.
<br></br><br></br>
 <h3 id="cdo">S'inscrire</h3>
 Pour prendre contact avec nous, poser des questions, et pourquoi pas vous inscrire, n'hésitez pas à :<br></br>
 • Nous appeler au <b id="cdo">01.80.50.91.48</b> <br></br>
 • Nous envoyer un mail à <a href="mailto:admission@eemi.com" target="_blank"><b id="cdo">admission@eemi.com</b></a>


    </article>
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
          
          position:relative;
        }

        #eemi_ball {
          height: 30px;
          width: 30px;
          background-color: #15163A;
          border-radius: 50%;
          margin: 0 auto;
          position: absolute;
          left: calc(50% - 15px);
          bottom:0;

          animation-duration: 0.5s;
          animation-name: bounce;
          animation-iteration-count: infinite;
          animation-direction: forwards;
          animation-timing-function: cubic-bezier(0.42,0,0.58,1);
        }

        @keyframes bounce {
          0% {
            bottom: 0;
          }
        
          50% {
            bottom: 15px;
          }

          100% {
            bottom: 0;
          }
        }

        #eemi_gif{
          margin-top:0;
          display:none;
        }

        #eemi_gif > img{
          height: 540px;
        }

        @keyframes reduceToCorner {
          from {
            height: 540px;
            width: 960px;
          }

          to {
            height: 270px;
            width: 480px;
          }
        }

        #content{
          display:none;
          margin-top: 20px;
          transition: 1s;
          opacity: 0; 
        }

      #tooltip {
          display:inline-block;
          position:relative;
          border-bottom:1px dotted #666;
          text-align:left;
      }
      
      #tooltip #top {
          min-width:200px; 
          top:-20px;
          left:50%;
          transform:translate(-50%, -100%);
          padding:10px 20px;
          color:#444444;
          background-color:#EEEEEE;
          font-weight:normal;
          font-size:13px;
          border-radius:8px;
          position:absolute;
          z-index:99999999;
          box-sizing:border-box;
          border:1px solid #000000;box-shadow:0 1px 8px rgba(0,0,0,0.5);
          display:none;
      }
      
      #tooltip:hover #top {
          display:block;
      }
      
      #tooltip #top i {
          position:absolute;
          top:100%;
          left:50%;
          margin-left:-12px;
          width:24px;
          height:12px;
          overflow:hidden;
      }
      
      #tooltip #top i::after {
          content:'';
          position:absolute;
          width:12px;
          height:12px;
          left:50%;
          transform:translate(-50%,-50%) rotate(45deg);
          background-color:#EEEEEE;
          border:1px solid #000000;box-shadow:0 1px 8px rgba(0,0,0,0.5);
      }

      #cto {
        color: #ffb700;
      }

      #cdo {
        color: #e643ae;
      }

      #ceo {
        color: #484ce5;
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
              overflow: hidden;
            
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
