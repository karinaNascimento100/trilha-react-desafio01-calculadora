# Calculadora React

Aplicação de calculadora construída com React e styled-components.

## ✨ Funcionalidades
- Operações: adição (+), subtração (-), multiplicação (x) e divisão (/)
- AC (limpar tudo) e ⌫ (apagar último dígito)
- % (porcentagem do valor atual)
- Exibição da expressão: mostra a operação em andamento e a última expressão resolvida (ex.: `6 + 4` → `10`)
- Layout responsivo simples: botões com tamanho uniforme e coluna de operadores à direita

## 📦 Requisitos
- Node.js 16+ (recomendado)

## ▶️ Como rodar
1. Instale as dependências:
	 - `npm install`
2. Inicie o servidor de desenvolvimento:
	 - `npm start`
3. Acesse em: http://localhost:3000

## 🧭 Como usar
- Toque nos números para montar o valor atual.
- Toque em um operador para definir a operação; a expressão aparece no topo.
- Toque em `=` para calcular; o resultado aparece e a expressão mostra o cálculo feito.
- `AC` limpa tudo. `⌫` apaga apenas o último dígito do valor atual.

## 🧱 Estrutura do projeto
```
src/
	App.js                # Lógica e layout principal da calculadora
	index.js              # Ponto de entrada do React
	global.js             # Estilos globais (reset/box-sizing)
	styles.js             # Layout (Container, Content, Row, Column)
	components/
		Button/
			index.js          # Componente de botão (label + onClick)
			styles.js         # Estilos do botão
		Input/
			index.js          # Visor com linha de expressão e valor
			styles.js         # Estilos do visor
```

## 🧠 Notas de implementação
- O estado `currentNumber` guarda o valor digitado/resultado.
- `firstNumber` e `operation` guardam a operação pendente até `=`.
- `expression` e `lastExpression` controlam o texto exibido acima do visor.
- Divisão por zero retorna `Erro`.

## 🚧 Próximos passos (opcional)
- Suporte a números decimais (botão `.`) com validação de múltiplos pontos
- Encadeamento de operações mais fluido
- Suporte ao teclado (números, Enter, Backspace, operadores)
- Diferenciar visualmente a coluna de operadores

---
Projeto iniciado com Create React App.
