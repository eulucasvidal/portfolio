export default function initBotaoTopo(){
    const btnTopo = document.querySelector(".botao-topo");
    btnTopo.addEventListener("click", () =>{
        window.scrollTo(0,0)
    });
    
    document.addEventListener('scroll', botaoOculto)
    function botaoOculto(){
        if(window.scrollY > 10){
            btnTopo.style.display = "flex";
        }else{
            btnTopo.style.display = "none";
        }
    }
    botaoOculto();
}