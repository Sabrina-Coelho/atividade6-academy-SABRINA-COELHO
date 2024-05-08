#language: pt

Funcionalidade: Atualizar Usuário

Cenário: Editar nome com sucesso
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito um nome válido
E clico no botão Salvar
Então a mensagem "Informações atualizadas com sucesso!" é exibida

Cenário: Editar e-mail com sucesso
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito um e-mail válido
E clico no botão Salvar
Então a mensagem "Informações atualizadas com sucesso!" é exibida

Cenário: Não é possível alterar para um nome numérico
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito o nome "123456789"
E clico no botão Salvar
Então a mensagem "Formato do nome é inválido." é exibida

Cenário: Não é possível alterar para um nome com mais de 100 caracteres
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito o nome "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
E clico no botão Salvar
Então a mensagem "Informe no máximo 100 caracteres para o nome" é exibida

Cenário: Não é possível alterar para um nome com menos de 4 caracteres
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito o nome "Aaa"
E clico no botão Salvar
Então a mensagem "Informe pelo menos 4 letras para o nome." é exibida

Cenário: Não é possível alterar para um e-mail sem ".com"
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito o e-mail "teste@testetesteteste"
E clico no botão Salvar
Então a mensagem "Formato de e-mail inválido" é exibida

Cenário: Não é possível alterar para um e-mail sem "@"
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito o e-mail "teste.com"
E clico no botão Salvar
Então a mensagem "Formato de e-mail inválido" é exibida

Cenário: Não é possível alterar para um e-mail com mais de 60 caracteres
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito o e-mail "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaaaaaaaaa"
E clico no botão Salvar
Então a mensagem "Informe no máximo 60 caracteres para o e-mail" é exibida

Cenário: Não é possível alterar para um e-mail com menos de 4 caracteres
Dado que acessei a tela com a lista de usuários
Quando clico em Ver detalhes de um usuário
E clico no botão Editar
E digito o e-mail "a@a"
E clico no botão Salvar
Então a mensagem "Informe pelo menos 4 caracteres para o e-mail." é exibida

