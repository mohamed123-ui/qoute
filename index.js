var qoute=['Be yourself; everyone else is already taken― Oscar Wilde' ,'You only live once, but if you do it right, once is enough.','So many books, so little time.','A room without books is like a body without a soul']
function changeQout(){
    var randomIndex=Math.floor(Math.random()*qoute.length)
    document.getElementById('qout').textContent=qoute[randomIndex]
}
