document.querySelector('form#form').addEventListener("submit", function(envio){
    envio.preventDefault(); // o formulário não vai ser enviado
    alert("Login efetuado com sucesso!")
})

function senha(){

    var txtemail = document.querySelector('input#login')
    var email = txtemail.value

    if(txtemail.value.length == 0){
        alert('Insira um endereço de e-mail válido.')
    }else{
        alert(`Um link de redefinição de senha foi enviado para ${email}`)
    }
    
}