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
          Pour découvrir la première école digitale, commencez ici
        </h1>
        <article id="content">
          
<h3>Bienvenue à l'EEMI l'école du Web</h3>

A l’intérieur du Palais Brongniart, situé <b>au cœur de Paris</b>, nous laissons libre cours à notre vocation : 
<b> former les futurs acteurs du web</b>. Porteurs d’une <b>pédagogie innovante</b>, nous garantissons une formation en adéquation avec 
les besoins des étudiants, les attentes des entreprises et les dernières évolutions technologiques. Intégrez l’un de nos parcours 
diplômants de <b>Bac à Bac + 5</b> en <b>Web Development, Interactive Design, E-Business ou Chef de Projets Digitaux</b>.

<h3>Une pédagogie innovante</h3>
La pédagogie constitue <b>le cœur de notre mission</b>, avec l’engagement de mettre à la disposition de nos étudiants 
<b> les meilleurs intervenants</b> dans chaque domaine.<br></br>

L’équipe pédagogique est structurée autour d’un <b>Directeur pédagogique</b>, garant de la qualité et de la cohérence des formations. 
Au centre du processus de formation, le Directeur pédagogique :<br></br>
•Assure la coordination et l’animation de l’équipe pédagogique<br></br>
•Met en place des “retours d’expérience” sur les méthodes d’enseignement afin d’améliorer les performances pédagogiques<br></br>
•Vérifie l’adéquation entre les formations réalisées, les attentes du marché et les avancées réglementaires<br></br>
Avec <b>plus d’une centaine d’intervenants</b>, l’équipe pédagogique de l’EEMI offre ainsi l’un des plus forts taux d’encadrement 
rapporté au nombre d’étudiants

<br></br>
<br></br>
Nos mastères proposent des spécialisations en : <br></br>
• Design, avec la filière <div id="tooltip"> <a href="/CDO" target="_blank" id="cdo"><b>CDO et Product Designer</b></a>
    <div id="top">
        <h3 id = "cdo">Devenez pro du design</h3>
        <p id = "cdo">Cliquez pour plus de détails !</p>
        <i></i>
    </div>
</div>
<br></br><br></br>
• Marketing, avec la filière <div id="tooltip"><a href="/CEO" target="_blank" id="ceo"><b>CEO et Expertise Digitale</b></a>
    <div id="top">
        <h3 id="ceo">Devenez pro du marketing</h3>
        <p id="ceo">Cliquez pour plus de détails !</p>
        <i></i>
    </div>
</div>
<br></br><br></br>
• Développement, avec la filière <div id="tooltip"><a href="/CTO" target="_blank" id="cto"><b>CTO et Tech Lead</b></a>
    <div id="top">
        <h3 id = "cto">Devenez pro du développement</h3>
        <p id="cto">Cliquez pour plus de détails !</p>
        <i></i>
    </div>
</div>
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
