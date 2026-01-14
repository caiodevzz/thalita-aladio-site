# 🚀 Guia para Subir o Projeto no GitHub

## 📋 Passo a Passo

### 1️⃣ Configurar o Git (se ainda não configurou)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### 2️⃣ Fazer o Commit Inicial

```bash
cd "/home/caio/Downloads/site da thalita"
git commit -m "Initial commit: Site React da Thalita Aládio - Gestão de Consultórios Psicológicos"
```

### 3️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Crie um novo repositório (ex: `thalita-aladio-site`)
3. **NÃO** inicialize com README, .gitignore ou license (já temos)

### 4️⃣ Conectar ao GitHub e Fazer Push

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/thalita-aladio-site.git

# Renomear branch para main (opcional, mas recomendado)
git branch -M main

# Fazer o push
git push -u origin main
```

### 5️⃣ Alternativa: Usando SSH (se preferir)

```bash
# Se você usa SSH keys
git remote add origin git@github.com:SEU_USUARIO/thalita-aladio-site.git
git branch -M main
git push -u origin main
```

## ✅ Verificação

Após o push, acesse seu repositório no GitHub e verifique se todos os arquivos foram enviados corretamente.

## 📝 Próximos Commits

Para fazer commits futuros:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

## 🔒 Arquivos Ignorados

O arquivo `.gitignore` já está configurado para ignorar:
- `node_modules/`
- `build/`
- Arquivos de ambiente (`.env`)
- Arquivos do sistema operacional

## 💡 Dicas

- Sempre faça commits com mensagens descritivas
- Faça commits frequentes
- Use branches para features novas