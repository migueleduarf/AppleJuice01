/**
 * 🧪 SCRIPT DE VERIFICAÇÃO - APPLE JUICE
 * 
 * Como usar:
 * 1. Abra static-build/index.html no navegador
 * 2. Pressione F12 para abrir DevTools
 * 3. Vá na aba "Console"
 * 4. Cole TODO este arquivo e pressione Enter
 * 5. Veja os resultados
 */

(function() {
    console.log('%c🍎 APPLE JUICE - VERIFICADOR DE SISTEMA', 'background: #8B0000; color: white; padding: 10px; font-size: 16px; font-weight: bold;');
    console.log('');
    
    const results = {
        success: [],
        warning: [],
        error: []
    };
    
    function check(name, condition, errorMsg) {
        if (condition) {
            results.success.push(name);
            console.log('%c✅ ' + name, 'color: green; font-weight: bold;');
        } else {
            results.error.push(name);
            console.log('%c❌ ' + name, 'color: red; font-weight: bold;');
            if (errorMsg) {
                console.log('%c   → ' + errorMsg, 'color: red;');
            }
        }
    }
    
    function warn(name, message) {
        results.warning.push(name);
        console.log('%c⚠️  ' + name, 'color: orange; font-weight: bold;');
        if (message) {
            console.log('%c   → ' + message, 'color: orange;');
        }
    }
    
    console.log('%c📋 VERIFICANDO FUNÇÕES...', 'background: #333; color: white; padding: 5px; font-weight: bold;');
    console.log('');
    
    // Verificar funções
    check('Função init()', typeof init === 'function', 'Script.js pode não estar carregado');
    check('Função toggleCart()', typeof toggleCart === 'function', 'Função não encontrada - verifique script.js linha ~2561');
    check('Função toggleUserPanel()', typeof toggleUserPanel === 'function', 'Função não encontrada - verifique script.js linha ~2595');
    check('Função toggleTheme()', typeof toggleTheme === 'function', 'Função não encontrada - verifique script.js linha ~2639');
    check('Função toggleMobileMenu()', typeof toggleMobileMenu === 'function', 'Função não encontrada - verifique script.js linha ~2629');
    check('Função handleSearch()', typeof handleSearch === 'function', 'Função não encontrada - verifique script.js linha ~2667');
    check('Função navigateTo()', typeof navigateTo === 'function', 'Função de navegação não encontrada');
    check('Função addToCart()', typeof addToCart === 'function', 'Função do carrinho não encontrada');
    
    console.log('');
    console.log('%c📋 VERIFICANDO ELEMENTOS HTML...', 'background: #333; color: white; padding: 5px; font-weight: bold;');
    console.log('');
    
    // Verificar elementos
    check('cart-sidebar', !!document.getElementById('cart-sidebar'), 'Elemento não existe - verifique index.html linha ~128');
    check('user-panel', !!document.getElementById('user-panel'), 'Elemento não existe - verifique index.html linha ~161');
    check('cart-overlay', !!document.getElementById('cart-overlay'), 'Elemento não existe - verifique index.html linha ~251');
    check('user-panel-overlay', !!document.getElementById('user-panel-overlay'), 'Elemento não existe - verifique index.html linha ~254');
    check('main-content', !!document.getElementById('main-content'), 'Elemento principal não existe');
    check('cart-count', !!document.getElementById('cart-count'), 'Contador do carrinho não existe');
    check('loading-screen', !!document.getElementById('loading-screen'), 'Tela de loading não existe');
    
    console.log('');
    console.log('%c📋 VERIFICANDO BIBLIOTECAS...', 'background: #333; color: white; padding: 5px; font-weight: bold;');
    console.log('');
    
    // Verificar bibliotecas
    check('Lucide Icons', typeof lucide !== 'undefined', 'CDN do Lucide não carregou');
    
    console.log('');
    console.log('%c📋 VERIFICANDO ESTADO...', 'background: #333; color: white; padding: 5px; font-weight: bold;');
    console.log('');
    
    // Verificar estado
    if (typeof products !== 'undefined') {
        check('Array de produtos', Array.isArray(products) && products.length > 0, 'Array vazio ou inválido');
        console.log('   📦 Total de produtos:', products.length);
    } else {
        check('Array de produtos', false, 'Variável products não existe');
    }
    
    if (typeof cartItems !== 'undefined') {
        check('Array do carrinho', Array.isArray(cartItems), 'Array inválido');
        console.log('   🛒 Itens no carrinho:', cartItems.length);
    } else {
        check('Array do carrinho', false, 'Variável cartItems não existe');
    }
    
    console.log('');
    console.log('%c📋 TESTES FUNCIONAIS...', 'background: #333; color: white; padding: 5px; font-weight: bold;');
    console.log('');
    
    // Testar se os elementos têm as classes corretas
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        const hasTransform = cartSidebar.classList.contains('translate-x-full');
        check('cart-sidebar com classe inicial', hasTransform, 'Sidebar deve começar escondida (translate-x-full)');
        
        const hasTransition = cartSidebar.classList.contains('transition-transform');
        check('cart-sidebar com transição', hasTransition, 'Sidebar deve ter animação');
    }
    
    const userPanel = document.getElementById('user-panel');
    if (userPanel) {
        const hasTransform = userPanel.classList.contains('translate-x-full');
        check('user-panel com classe inicial', hasTransform, 'Painel deve começar escondido (translate-x-full)');
        
        const hasTransition = userPanel.classList.contains('transition-transform');
        check('user-panel com transição', hasTransition, 'Painel deve ter animação');
    }
    
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        const isHidden = cartOverlay.classList.contains('hidden');
        check('cart-overlay escondido', isHidden, 'Overlay deve começar escondido');
    }
    
    const userOverlay = document.getElementById('user-panel-overlay');
    if (userOverlay) {
        const isHidden = userOverlay.classList.contains('hidden');
        check('user-panel-overlay escondido', isHidden, 'Overlay deve começar escondido');
    }
    
    console.log('');
    console.log('%c═══════════════════════════════════════', 'color: #8B0000;');
    console.log('%c📊 RESUMO DOS RESULTADOS', 'background: #8B0000; color: white; padding: 10px; font-size: 14px; font-weight: bold;');
    console.log('%c═══════════════════════════════════════', 'color: #8B0000;');
    console.log('');
    console.log('%c✅ Sucessos: ' + results.success.length, 'color: green; font-weight: bold; font-size: 14px;');
    console.log('%c⚠️  Avisos: ' + results.warning.length, 'color: orange; font-weight: bold; font-size: 14px;');
    console.log('%c❌ Erros: ' + results.error.length, 'color: red; font-weight: bold; font-size: 14px;');
    console.log('');
    
    if (results.error.length === 0) {
        console.log('%c🎉 TUDO FUNCIONANDO PERFEITAMENTE!', 'background: green; color: white; padding: 10px; font-size: 16px; font-weight: bold;');
        console.log('');
        console.log('%c💡 TESTE MANUAL:', 'background: #333; color: white; padding: 5px; font-weight: bold;');
        console.log('');
        console.log('Cole os comandos abaixo para testar manualmente:');
        console.log('');
        console.log('%ctoggleCart()', 'background: #f0f0f0; padding: 5px; font-family: monospace;');
        console.log('→ O carrinho deve deslizar da direita');
        console.log('');
        console.log('%ctoggleUserPanel()', 'background: #f0f0f0; padding: 5px; font-family: monospace;');
        console.log('→ O painel de usuário deve deslizar da direita');
        console.log('');
        console.log('%ctoggleTheme()', 'background: #f0f0f0; padding: 5px; font-family: monospace;');
        console.log('→ O tema deve alternar entre claro/escuro');
    } else {
        console.log('%c⚠️  PROBLEMAS DETECTADOS!', 'background: red; color: white; padding: 10px; font-size: 16px; font-weight: bold;');
        console.log('');
        console.log('Erros encontrados:');
        results.error.forEach(error => {
            console.log('%c  • ' + error, 'color: red;');
        });
        console.log('');
        console.log('%c📋 PRÓXIMOS PASSOS:', 'background: #333; color: white; padding: 5px; font-weight: bold;');
        console.log('');
        console.log('1. Verifique se os 3 arquivos estão na mesma pasta:');
        console.log('   - index.html');
        console.log('   - script.js');
        console.log('   - styles.css');
        console.log('');
        console.log('2. Verifique se não há erros de sintaxe (procure linhas vermelhas no Console)');
        console.log('');
        console.log('3. Tente recarregar a página com cache limpo:');
        console.log('   Windows/Linux: Ctrl + Shift + R');
        console.log('   Mac: Cmd + Shift + R');
        console.log('');
        console.log('4. Abra o arquivo teste-funcoes.html para diagnóstico detalhado');
    }
    
    console.log('');
    console.log('%c═══════════════════════════════════════', 'color: #8B0000;');
    
    // Retorna objeto com resultados para acesso posterior
    window.verificacaoAppleJuice = {
        sucesso: results.success,
        avisos: results.warning,
        erros: results.error,
        total: results.success.length + results.warning.length + results.error.length,
        funcionando: results.error.length === 0
    };
    
    return window.verificacaoAppleJuice;
})();

