#!/bin/bash

# Script para fazer push do projeto para o GitHub
# Execute: bash push-to-github.sh

echo "🚀 Preparando para fazer push no GitHub..."
echo ""

# Verificar se o git está configurado
if ! git config user.name > /dev/null 2>&1; then
    echo "❌ Git não está configurado!"
    echo "Execute primeiro:"
    echo "  git config --global user.name 'Seu Nome'"
    echo "  git config --global user.email 'seu-email@exemplo.com'"
    exit 1
fi

# Fazer commit se houver mudanças
if [ -n "$(git status -s)" ]; then
    echo "📝 Fazendo commit das mudanças..."
    git add .
    git commit -m "Update: Site React da Thalita Aládio"
    echo "✅ Commit realizado!"
else
    echo "✅ Nenhuma mudança para commitar"
fi

# Verificar se já existe remote
if git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "📤 Fazendo push para o GitHub..."
    git branch -M main 2>/dev/null
    git push -u origin main
    echo ""
    echo "✅ Push realizado com sucesso!"
else
    echo ""
    echo "⚠️  Repositório remoto não configurado!"
    echo ""
    echo "Execute primeiro:"
    echo "  git remote add origin https://github.com/SEU_USUARIO/thalita-aladio-site.git"
    echo "  git branch -M main"
    echo "  git push -u origin main"
fi