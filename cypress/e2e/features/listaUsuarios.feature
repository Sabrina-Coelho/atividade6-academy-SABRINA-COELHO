#language: pt

Funcionalidade: Listagem de Usuários

Cenário: Lista vazia mostra opções de cadastro de usuário
Dado que não há nenhum usuário cadastrado
Quando acesso a lista de usuários
Então as mensagens "Ops! Não existe nenhum usuário para ser exibido." e "Cadastre um novo usuário" são exibidas

Cenário: Retorna lista de usuários existentes com sucesso
Dado que há pelo menos um usuário cadastrado
Quando acesso a lista de usuários
Então visualizo todos os usuários cadastrados