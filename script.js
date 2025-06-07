document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const googleLogin = document.getElementById('googleLogin');
    const facebookLogin = document.getElementById('facebookLogin');
    
    // Simulação de login com formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validação simples
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Simulação de autenticação
        console.log('Tentativa de login com:', { email, password });
        alert('Login realizado com sucesso! (simulação)');
        
        // Aqui você normalmente faria uma requisição para o servidor
        // fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         window.location.href = '/dashboard';
        //     } else {
        //         alert(data.message || 'Erro no login');
        //     }
        // });
    });
    
    // Simulação de login com Google
    googleLogin.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Tentativa de login com Google');
        alert('Redirecionando para o login do Google... (simulação)');
        
        // Implementação real usaria OAuth
        // window.location.href = '/auth/google';
    });
    
    // Simulação de login com Facebook
    facebookLogin.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Tentativa de login com Facebook');
        alert('Redirecionando para o login do Facebook... (simulação)');
        
        // Implementação real usaria OAuth
        // window.location.href = '/auth/facebook';
    });
});