# Guia de Deploy no Netlify

## Passo 1: Enviar o Repositório para GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New" para criar um novo repositório
3. Nomeie como `beatriz-rosa-site`
4. **NÃO** inicialize com README (já temos)
5. Clique em "Create repository"

## Passo 2: Conectar seu Repositório Local ao GitHub

Execute os comandos abaixo (substitua `SEU_USUARIO` pelo seu usuário GitHub):

```bash
cd /home/ubuntu/beatriz-rosa-site
git remote add origin https://github.com/SEU_USUARIO/beatriz-rosa-site.git
git branch -M main
git push -u origin main
```

## Passo 3: Conectar Netlify ao GitHub

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign up" (ou faça login se já tiver conta)
3. Selecione "GitHub" para conectar
4. Autorize o Netlify a acessar seus repositórios
5. Clique em "New site from Git"
6. Selecione o repositório `beatriz-rosa-site`

## Passo 4: Configurar Build Settings

Na página de configuração do Netlify:

- **Build command:** `pnpm run build`
- **Publish directory:** `dist/public`

Clique em "Deploy site"

## Passo 5: Seu Site Estará Online!

Após alguns minutos, você receberá um URL como:
`https://beatriz-rosa-site.netlify.app`

## Atualizações Automáticas

Toda vez que você fizer `git push` para o GitHub, o Netlify automaticamente:
1. Detecta as mudanças
2. Reconstrói o site
3. Publica a nova versão

## Domínio Personalizado (Opcional)

Se tiver um domínio próprio:
1. No painel do Netlify, vá para "Settings" > "Domain management"
2. Adicione seu domínio
3. Siga as instruções para atualizar os DNS

---

**Dúvidas?** Consulte: https://docs.netlify.com/
