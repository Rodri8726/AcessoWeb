# AcessoWeb

O AcessoWeb é um projeto acadêmico desenvolvido para aplicar conceitos de desenvolvimento front-end, versionamento de código, acessibilidade digital, otimização e publicação de uma aplicação web.

O projeto apresenta informações sobre acessibilidade digital e boas práticas para tornar conteúdos web mais acessíveis.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Acessibilidade

O projeto foi desenvolvido considerando boas práticas relacionadas às diretrizes WCAG 2.1, com foco no nível AA.

Entre os recursos implementados estão:

- utilização de HTML semântico;
- navegação por teclado;
- indicador visual de foco;
- link para acesso direto ao conteúdo principal;
- identificação da navegação com ARIA;
- associação entre labels e campos de formulário;
- controle de alto contraste;
- uso de atributos ARIA em componentes interativos.

## Estrutura do projeto

```text
AcessoWeb/
├── css/
│   └── style.css
├── images/
├── js/
│   └── script.js
├── index.html
├── readme.md
└── .gitignore
```

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

A organização das branches segue uma estratégia baseada em GitFlow:

- `main`: versão estável do projeto;
- `develop`: integração das funcionalidades em desenvolvimento;
- `feature/*`: desenvolvimento isolado de funcionalidades.

Os commits seguem o padrão Conventional Commits, utilizando prefixos como `feat`, `docs` e `chore` para identificar o tipo de alteração realizada.

## Versionamento semântico

As versões estáveis do projeto seguem o padrão Semantic Versioning:

`MAJOR.MINOR.PATCH`

Nesse padrão:

- `MAJOR` indica alterações incompatíveis com versões anteriores;
- `MINOR` indica novas funcionalidades compatíveis com a versão anterior;
- `PATCH` indica correções compatíveis com a versão anterior.

A versão `v1.0.0` representará a primeira versão estável do AcessoWeb.

## Execução local

Nesta etapa do projeto, a aplicação pode ser executada localmente abrindo o arquivo `index.html` em um navegador.

O processo de build para produção será configurado posteriormente com Vite.

## Autor

Projeto acadêmico desenvolvido por Rodrigo Tonon Bonfim.