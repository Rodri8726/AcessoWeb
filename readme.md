# AcessoWeb

O **AcessoWeb** é um projeto acadêmico desenvolvido para aplicar conceitos de desenvolvimento front-end, versionamento de código, acessibilidade digital, otimização e publicação de uma aplicação web.

O projeto apresenta informações sobre acessibilidade digital e boas práticas para tornar conteúdos web mais acessíveis, utilizando uma interface responsiva e recursos voltados à navegação e interação por diferentes usuários.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- npm
- Vite
- Sharp
- Git
- GitHub

## Acessibilidade

O projeto foi desenvolvido considerando boas práticas relacionadas às diretrizes **WCAG 2.1**, com foco no nível AA.

Entre os recursos implementados estão:

- utilização de HTML semântico;
- navegação por teclado;
- indicador visual de foco;
- link para acesso direto ao conteúdo principal;
- identificação da navegação com ARIA;
- associação entre `label` e campos de formulário;
- uso de `autocomplete` nos campos apropriados;
- controle de alto contraste;
- uso de `aria-pressed` no controle interativo de contraste;
- texto alternativo (`alt`) para imagem informativa;
- layout responsivo para diferentes tamanhos de tela.

## Otimização de imagem

A imagem utilizada no projeto foi originalmente armazenada em formato PNG e posteriormente convertida para **WebP** utilizando a biblioteca Sharp.

O arquivo original possuía **1.663.005 bytes**, enquanto a versão WebP possui **76.880 bytes**, representando uma redução aproximada de **95,4%** no tamanho do arquivo.

A versão PNG original não é mantida na aplicação final, evitando o envio de um arquivo desnecessariamente maior para produção.

## Build de produção

O projeto utiliza **Vite** como ferramenta de desenvolvimento e build.

Durante o build, os arquivos da aplicação são processados e é gerada a pasta `dist`, contendo a versão preparada para publicação.

O build pode ser executado com:

```bash
npm run build
```

A versão de produção pode ser testada localmente com:

```bash
npm run preview
```

## Estrutura do projeto

```text
AcessoWeb/
├── css/
│   └── style.css
├── images/
│   └── acessibilidade-digital.webp
├── js/
│   └── script.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── readme.md
```

A pasta `dist` é gerada automaticamente durante o processo de build e não é versionada no repositório.

A pasta `node_modules` também não é versionada.

## Execução local

É necessário possuir o **Node.js** instalado.

Após clonar o repositório, instale as dependências:

```bash
npm install
```

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite iniciará um servidor local e informará no terminal o endereço para acessar a aplicação.

Em ambientes Windows nos quais a execução de scripts do PowerShell esteja bloqueada, os comandos também podem ser executados utilizando `npm.cmd`, por exemplo:

```powershell
npm.cmd run dev
```

## Versionamento

O projeto utiliza **Git** e **GitHub** para controle de versão.

A organização das branches segue uma estratégia baseada em GitFlow:

- `main`: versão estável do projeto;
- `develop`: integração das funcionalidades em desenvolvimento;
- `feature/*`: desenvolvimento isolado de funcionalidades.

As funcionalidades são desenvolvidas em branches específicas e posteriormente integradas à `develop`. Após a estabilização do projeto, a `develop` é integrada à `main` para representar uma versão pronta para produção.

## Conventional Commits

As mensagens de commit seguem o padrão **Conventional Commits**, utilizando prefixos que identificam a natureza da alteração.

Exemplos utilizados no projeto:

- `chore`: tarefas de configuração e estrutura;
- `feat`: implementação de funcionalidades;
- `docs`: alterações de documentação;
- `build`: alterações relacionadas ao processo de build;
- `perf`: otimizações de desempenho.

## Versionamento semântico

As versões estáveis seguem o padrão **Semantic Versioning (SemVer)**:

`MAJOR.MINOR.PATCH`

Nesse padrão:

- `MAJOR` indica alterações incompatíveis com versões anteriores;
- `MINOR` indica novas funcionalidades compatíveis;
- `PATCH` indica correções compatíveis com a versão existente.

A versão **v1.0.0** corresponde à primeira versão estável planejada do AcessoWeb.

## Autor

Projeto acadêmico desenvolvido por **Rodrigo Tonon Bonfim**.