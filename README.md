# Sabor & Tradição

<!DOCTYPE html>

<html lang="pt">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Sabor & Tradição | Restaurante & Delivery</title>



    <!-- Configurações PWA e Ícones -->

    <link rel="manifest" href="manifest.json">

    <link rel="icon" type="image/png" sizes="32x32" href="https://cdn-icons-png.flaticon.com/512/3170/3170733.png">

    <link rel="apple-touch-icon" href="https://cdn-icons-png.flaticon.com/512/3170/3170733.png">

    <meta name="theme-color" content="#e63946">

    <meta name="mobile-web-app-capable" content="yes">

    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <meta name="apple-mobile-web-app-title" content="Sabor&Tradição">



    <style>

        * {

            margin: 0;

            padding: 0;

            box-sizing: border-box;

            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;

        }



        :root {

            --primary: #e63946;

            --primary-hover: #c52a36;

            --dark: #1d3557;

            --light: #f8f9fa;

            --gray: #6c757d;

            --whatsapp: #25d366;

            --whatsapp-hover: #1eb854;

        }



        html {

            scroll-behavior: smooth;

        }



        body {

            background-color: var(--light);

            color: #333;

            line-height: 1.6;

            padding-bottom: 70px;

        }



        header {

            background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;

            color: white;

            text-align: center;

            padding: 100px 20px;

        }



        header h1 {

            font-size: 2.8rem;

            margin-bottom: 15px;

            font-weight: 800;

        }



        header p {

            font-size: 1.2rem;

            margin-bottom: 25px;

            opacity: 0.9;

        }



        .hero-btns {

            display: flex;

            gap: 15px;

            justify-content: center;

            flex-wrap: wrap;

        }



        .btn {

            display: inline-block;

            padding: 12px 28px;

            text-decoration: none;

            font-weight: bold;

            border-radius: 30px;

            transition: all 0.3s ease;

            border: none;

            cursor: pointer;

        }



        .btn-primary {

            background-color: var(--primary);

            color: white;

        }



        .btn-primary:hover {

            background-color: var(--primary-hover);

            transform: translateY(-2px);

        }



        .btn-whatsapp {

            background-color: var(--whatsapp);

            color: white;

        }



        .btn-whatsapp:hover {

            background-color: var(--whatsapp-hover);

            transform: translateY(-2px);

        }



        .container {

            max-width: 1000px;

            margin: 0 auto;

            padding: 50px 20px;

        }



        .section-title {

            text-align: center;

            color: var(--dark);

            margin-bottom: 35px;

            font-size: 2rem;

            position: relative;

        }



        .section-title::after {

            content: '';

            display: block;

            width: 60px;

            height: 4px;

            background: var(--primary);

            margin: 10px auto 0;

            border-radius: 2px;

        }



        .tabs {

            display: flex;

            justify-content: center;

            gap: 10px;

            margin-bottom: 30px;

            flex-wrap: wrap;

        }



        .tab-btn {

            padding: 8px 20px;

            background-color: #e9ecef;

            border: none;

            border-radius: 20px;

            cursor: pointer;

            font-weight: 600;

            color: var(--dark);

            transition: 0.3s;

        }



        .tab-btn.active, .tab-btn:hover {

            background-color: var(--dark);

            color: white;

        }



        .menu-grid {

            display: grid;

            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

            gap: 25px;

        }



        .menu-item {

            background: white;

            border-radius: 12px;

            overflow: hidden;

            box-shadow: 0 5px 15px rgba(0,0,0,0.05);

            transition: transform 0.3s ease;

            display: flex;

            flex-direction: column;

        }



        .menu-item:hover {

            transform: translateY(-5px);

        }



        .menu-item img {

            width: 100%;

            height: 180px;

            object-fit: cover;

        }



        .menu-item-content {

            padding: 20px;

            display: flex;

            flex-direction: column;

            flex-grow: 1;

        }



        .menu-item-header {

            display: flex;

            justify-content: space-between;

            align-items: center;

            margin-bottom: 10px;

        }



        .menu-item-title {

            font-size: 1.2rem;

            font-weight: 700;

            color: var(--dark);

        }



        .price {

            font-size: 1.1rem;

            font-weight: 800;

            color: var(--primary);

        }



        .menu-item-desc {

            font-size: 0.9rem;

            color: var(--gray);

            margin-bottom: 20px;

            flex-grow: 1;

        }



        .btn-add {

            width: 100%;

            padding: 10px;

            background-color: var(--dark);

            color: white;

            border: none;

            border-radius: 6px;

            font-weight: bold;

            cursor: pointer;

            transition: 0.2s;

        }



        .btn-add:hover {

            background-color: var(--primary);

        }



        .info-grid {

            display: grid;

            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

            gap: 20px;

            margin-top: 40px;

        }



        .info-card {

            background: white;

            padding: 30px;

            border-radius: 12px;

            text-align: center;

            box-shadow: 0 5px 15px rgba(0,0,0,0.05);

        }



        .info-card h3 {

            color: var(--dark);

            margin-bottom: 15px;

        }



        .whatsapp-float {

            position: fixed;

            width: 60px;

            height: 60px;

            bottom: 25px;

            right: 25px;

            background-color: var(--whatsapp);

            color: white;

            border-radius: 50px;

            text-align: center;

            font-size: 30px;

            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);

            z-index: 100;

            display: flex;

            align-items: center;

            justify-content: center;

            text-decoration: none;

            transition: transform 0.3s;

        }



        .whatsapp-float:hover {

            transform: scale(1.1);

            background-color: var(--whatsapp-hover);

        }



        footer {

            background-color: var(--dark);

            color: white;

            text-align: center;

            padding: 25px 20px;

            margin-top: 60px;

            font-size: 0.9rem;

        }



        footer strong {

            color: var(--primary);

        }

    </style>

</head>

<body>



    <a href="https://wa.me/258824230379?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." class="whatsapp-float" target="_blank" title="Falar no WhatsApp">

        💬

    </a>



    <header>

        <h1>Sabor & Tradição</h1>

        <p>A melhor experiência gastronómica da cidade entregue na sua porta</p>

        <div class="hero-btns">

            <a href="#cardapio" class="btn btn-primary">Ver Cardápio</a>

            <a href="https://wa.me/258824230379?text=Olá!%20Quero%20fazer%20um%20pedido." class="btn btn-whatsapp" target="_blank">Fazer Pedido Direto</a>

        </div>

    </header>



    <div class="container" id="cardapio">

        <h2 class="section-title">Nosso Cardápio</h2>



        <div class="tabs">

            <button class="tab-btn active" onclick="filtrar('todos', event)">Todos</button>

            <button class="tab-btn" onclick="filtrar('principais', event)">Principais</button>

            <button class="tab-btn" onclick="filtrar('lanches', event)">Lanches</button>

            <button class="tab-btn" onclick="filtrar('bebidas', event)">Bebidas</button>

        </div>



        <div class="menu-grid">

            <div class="menu-item" data-categoria="principais">

                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" alt="Bife Grelhado">

                <div class="menu-item-content">

                    <div class="menu-item-header">

                        <span class="menu-item-title">Bife à Casa</span>

                        <span class="price">550 MT</span>

                    </div>

                    <p class="menu-item-desc">Suculento bife de novilho grelhado, acompanhado de batatas fritas crocantes e salada.</p>

                    <button class="btn-add" onclick="pedirItem('Bife à Casa', '550 MT')">Pedir via WhatsApp</button>

                </div>

            </div>



            <div class="menu-item" data-categoria="lanches">

                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" alt="Hambúrguer">

                <div class="menu-item-content">

                    <div class="menu-item-header">

                        <span class="menu-item-title">Hambúrguer Gourmet</span>

                        <span class="price">400 MT</span>

                    </div>

                    <p class="menu-item-desc">Hambúrguer artesanal 180g, queijo cheddar fundido, bacon e molho especial no pão brioche.</p>

                    <button class="btn-add" onclick="pedirItem('Hambúrguer Gourmet', '400 MT')">Pedir via WhatsApp</button>

                </div>

            </div>



            <div class="menu-item" data-categoria="principais">

                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" alt="Pizza">

                <div class="menu-item-content">

                    <div class="menu-item-header">

                        <span class="menu-item-title">Pizza Pepperoni</span>

                        <span class="price">650 MT</span>

                    </div>

                    <p class="menu-item-desc">Massa artesanal fina, molho de tomate caseiro, bastante mozarela e rodelas de pepperoni.</p>

                    <button class="btn-add" onclick="pedirItem('Pizza Pepperoni', '650 MT')">Pedir via WhatsApp</button>

                </div>

            </div>



            <div class="menu-item" data-categoria="bebidas">

                <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" alt="Sumo Natural">

                <div class="menu-item-content">

                    <div class="menu-item-header">

                        <span class="menu-item-title">Sumo Natural 500ml</span>

                        <span class="price">150 MT</span>

                    </div>

                    <p class="menu-item-desc">Sumo natural feito na hora. Opções: Laranja, Ananás com Hortelã ou Fruta da Época.</p>

                    <button class="btn-add" onclick="pedirItem('Sumo Natural', '150 MT')">Pedir via WhatsApp</button>

                </div>

            </div>

        </div>



        <div class="info-grid">

            <div class="info-card">

                <h3>📍 Localização</h3>

                <p>Av. Principal, nº 1234</p>

                <p>Bairro Central — Maputo</p>

                <p style="margin-top: 10px; font-weight: bold; color: var(--primary);">Próximo ao Jardim Tunduru</p>

            </div>

            <div class="info-card">

                <h3>🕒 Horário de Funcionamento</h3>

                <p><strong>Terça a Sexta:</strong> 11h00 – 22h00</p>

                <p><strong>Sábado e Domingo:</strong> 11h00 – 23h00</p>

                <p style="margin-top: 10px; color: var(--gray);">Segunda-feira: Fechado</p>

            </div>

        </div>

    </div>



    <footer>

        <p>&copy; 2026 Restaurante Sabor & Tradição — Todos os direitos reservados.</p>

        <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 5px;">Desenvolvido por <strong>Abibo Atumane</strong></p>

    </footer>



    <script>

        // Pedido via WhatsApp

        function pedirItem(nome, preco) {

            const numeroTelefone = "258824230379"; 

            const texto = `Olá! Gostaria de fazer o pedido do prato: *${nome}* (${preco}).`;

            const link = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(texto)}`;

            window.open(link, '_blank');

        }



        // Filtro por categorias

        function filtrar(categoria, evt) {

            const items = document.querySelectorAll('.menu-item');

            const btns = document.querySelectorAll('.tab-btn');



            btns.forEach(btn => btn.classList.remove('active'));

            if (evt) evt.target.classList.add('active');



            items.forEach(item => {

                if (categoria === 'todos' || item.getAttribute('data-categoria') === categoria) {

                    item.style.display = 'flex';

                } else {

                    item.style.display = 'none';

                }

            });

        }



        // Registro do Service Worker para PWA

        if ('serviceWorker' in navigator) {

            window.addEventListener('load', () => {

                navigator.serviceWorker.register('./sw.js')

                    .then(reg => console.log('Service Worker registrado com sucesso! Scope:', reg.scope))

                    .catch(err => console.error('Falha ao registrar Service Worker:', err));

            });

        }

    </script>

</body>

</html>

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bb751473-aab9-4141-93ad-a05cc0a59932).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
