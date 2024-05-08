#language: pt

Funcionalidade: Pesquisar Usuário

Cenário: Pesquisar por nome deve retornar o usuário pesquisado
Dado que há pelo menos um usuário cadastrado
E que acessei a tela com a lista de usuários
Quando clico na barra de pesquisa e digito o nome cadastrado
Então sou direcionado para a tela com os usuários com o nome correspondente

Cenário: Pesquisar por email deve retornar o usuário pesquisado
Dado que há pelo menos um usuário cadastrado
E que acessei a tela com a lista de usuários
Quando clico na barra de pesquisa e digito o e-mail cadastrado
Então sou direcionado para a tela com os usuários com o e-mail correspondente

Cenário: Pesquisar por nome numérico deve retornar erro
Dado que acessei a tela com a lista de usuários
Quando clico na barra de pesquisa e digito o nome "123456789"
Então as mensagens "Ops! Não existe nenhum usuário para ser exibido." e "Cadastre um novo usuário" são exibidas

Cenário: Pesquisar por email sem ".com" deve retornar erro
Dado que acessei a tela com a lista de usuários
Quando clico na barra de pesquisa e digito o e-mail "teste@teste"
Então as mensagens "Ops! Não existe nenhum usuário para ser exibido." e "Cadastre um novo usuário" são exibidas

Cenário: Pesquisar por email sem "@" deve retornar erro
Dado que acessei a tela com a lista de usuários
Quando clico na barra de pesquisa e digito o e-mail "testeteste.br"
Então as mensagens "Ops! Não existe nenhum usuário para ser exibido." e "Cadastre um novo usuário" são exibidas