# Guia de Publicação na Vercel

## Passo 1: Preparar o Repositório Git

Se ainda não tiver um repositório Git, crie um:

```bash
cd /home/ubuntu/beatriz-rosa-site
git init
git add .
git commit -m "Initial commit: Beatriz Rosa website"
```

## Passo 2: Enviar para GitHub

1. Acesse [github.com](https://github.com) e crie uma conta (se não tiver)
2. Crie um novo repositório chamado `beatriz-rosa-site`
3. Siga as instruções para enviar seu código:

```bash
git remote add origin https://github.com/SEU_USUARIO/beatriz-rosa-site.git
git branch -M main
git push -u origin main
```

## Passo 3: Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" e crie uma conta (pode usar GitHub)
3. Clique em "New Project"
4. Selecione o repositório `beatriz-rosa-site`
5. Vercel detectará automaticamente que é um projeto React/Vite
6. Clique em "Deploy"

## Passo 4: Seu Site Estará Online!

Após alguns minutos, você receberá um URL como:
`https://beatriz-rosa-site.vercel.app`

## Passo 5 (Opcional): Usar Domínio Personalizado

Se tiver um domínio próprio (como beatrizrosa.com.br):

1. No painel da Vercel, vá para "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Siga as instruções para atualizar os DNS do seu domínio

---

**Dúvidas?** Consulte a documentação oficial: https://vercel.com/docs
