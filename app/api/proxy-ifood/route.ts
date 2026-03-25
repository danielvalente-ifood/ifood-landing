export async function GET(request: Request) {
  try {
    const response = await fetch('https://www.ifoodpago.com.br/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0',
      },
      redirect: 'follow',
    });

    let html = await response.text();

    // Remove completamente meta tags de segurança
    html = html.replace(/<meta[^>]*http-equiv\s*=\s*["']Content-Security-Policy["'][^>]*>/gi, '');
    html = html.replace(/<meta[^>]*http-equiv\s*=\s*["']X-UA-Compatible["'][^>]*>/gi, '');
    html = html.replace(/<meta[^>]*name\s*=\s*["']referrer["'][^>]*>/gi, '');

    // Substitui a abertura de head e injeta base tag
    html = html.replace(/<head[^>]*>/i, (match) => {
      return match + '\n<base href="https://www.ifoodpago.com.br/">';
    });

    // Injeta script para permitir iframe
    const script = `
      <script>
        (function() {
          try {
            Object.defineProperty(window, 'frameElement', { value: null });
          } catch(e) {}
          try {
            document.domain = 'localhost';
          } catch(e) {}
        })();
      </script>
    `;

    html = html.replace('</head>', script + '\n</head>');

    // Remove atributos que podem bloquear
    html = html.replace(/frame-src\s+'none'/gi, "frame-src 'self' https:");

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'X-Frame-Options': 'ALLOWALL',
        'Referrer-Policy': 'no-referrer',
      },
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response('Erro ao carregar o conteúdo', { status: 500 });
  }
}
