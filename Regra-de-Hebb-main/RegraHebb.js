var s = [[1,1],[-1,1],[1,-1],[-1,-1]]
var t = [1, -1, 1, -1]

var wnovo = [0,0]
var bnovo = 0
var wanterior = [0,0]
var banterior = 0

var limiar = 0

var x = [[0,0],[0,0],[0,0],[0,0]]

function input() {
    t[0] = parseInt(document.getElementById('t0').value)
    t[1] = parseInt(document.getElementById('t1').value)
    t[2] = parseInt(document.getElementById('t2').value)
    t[3] = parseInt(document.getElementById('t3').value)
    wanterior = [0,0]
    banterior = 0
}

function treina() {
    input()
    for(let i=0; i<4; i++){
    x[i] = s[i]
    let y = t[i]

    wnovo[0] = wanterior[0] + x[i][0]*y
    wnovo[1] = wanterior[1] + x[i][1]*y
    bnovo = banterior + y

    wanterior=wnovo
    banterior=bnovo
    }
    document.getElementById('w1').value = wnovo[0]
    document.getElementById('w2').value = wnovo[1]
    document.getElementById('bias').value = bnovo



}

function testa() {
    let yresposta = [0,0,0,0]
    for(let i = 0; i<4;i++){
        let yliquido = wnovo[0]*x[i][0] + wnovo[1]*x[i][1] + bnovo
        if(yliquido>=limiar){
           yteste=1
        }else{
           yteste=-1
        }
        yresposta[i] = yteste
    }

    document.getElementById('y0').value = yresposta[0]
    document.getElementById('y1').value = yresposta[1]
    document.getElementById('y2').value = yresposta[2]
    document.getElementById('y3').value = yresposta[3]
}