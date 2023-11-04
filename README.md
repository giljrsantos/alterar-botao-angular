# Alternando Estado Botão

Esse é um projetinho simples.

O objetivo da aplicação desenvolvido em `Angular2+` é alternar corretamente o botão entre um estado DESLIGADO e um estado LIGADO. Quando o botão está ativado e clicado, ele é desligado e o texto dentro do card muda de Power Off para Connected e vice-versa.

Nesse projetinho também usei o `@angular/material` para controler os icones, formato do botão e para implementar o card.

Para instalar o material é `ng add @angular/material` e importar os modulos que deseja usar no `app.module.ts`.

```json
Angular CLI: 16.2.7
Node: 18.16.0
Package Manager: npm 9.5.1
```

## Codigo JavaScript

```javascript
// declaração da variavel de controle com sua tipagem
  buttonState: boolean = true;

// cria função toggleState que é usada para alternar o estado de algum botão
  toggleState() {
    // linha que inverte o valor da propriedade `buttonState`.
    // Se `buttonState` estiver `true`, ele se torna `false`, e vice-versa
    this.buttonState = !this.buttonState;
  }
```
# DESLIGADO
<img src="./src/assets/IMG/1.png" width="100%">

# LIGADO
<img src="./src/assets/IMG/2.png" width="100%">



<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>