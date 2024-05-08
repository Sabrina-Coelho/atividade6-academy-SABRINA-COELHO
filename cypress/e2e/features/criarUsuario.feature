#language: pt

Funcionalidade: Criar usuário

Cenário: Usuário deve ser cadastrado com sucesso
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo um e-mail válido
E clico no botão Salvar
Então a mensagem "Usuário salvo com sucesso!" é exibida

Cenário: Nome em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um e-mail válido
E não preencho o campo nome
E clico no botão Salvar
Então a mensagem "O campo nome é obrigatório." é exibida

Cenário: Email em branco deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
Mas não preencho o campo e-mail
E clico no botão Salvar
Então a mensagem "O campo e-mail é obrigatório." é exibida

Cenário: Email sem "@" deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo o e-mail "teste.com"
E clico no botão Salvar
Então a mensagem "Formato de e-mail inválido" é exibida

Cenário: Email sem ".com" deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo o e-mail "teste@testetesteteste"
E clico no botão Salvar
Então a mensagem "Formato de e-mail inválido" é exibida

Cenário: Não é possível cadastrar email com mais de 60 caracteres
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo o e-mail "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaaaaaaaaa"
E clico no botão Salvar
Então a mensagem "Informe no máximo 60 caracteres para o e-mail" é exibida

Cenário: Não é possível cadastrar email com menos de 4 caracteres
Dado que acessei a funcionalidade de cadastro
Quando informo um nome válido
E informo o e-mail "a@a"
E clico no botão Salvar
Então a mensagem "Informe pelo menos 4 caracteres para o e-mail" é exibida

Cenário: Nome numérico deve dar erro
Dado que acessei a funcionalidade de cadastro
Quando informo um e-mail válido
E informo o nome "123456789"
E clico no botão Salvar
Então a mensagem "Formato do nome é inválido." é exibida

Cenário: Não é possível cadastrar nome com mais de 100 caracteres
Dado que acessei a funcionalidade de cadastro
Quando informo um e-mail válido
E informo o nome "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
E clico no botão Salvar
Então a mensagem "Informe no máximo 100 caracteres para o nome" é exibida

Cenário: Não é possível cadastrar nome com menos de 4 caracteres
Dado que acessei a funcionalidade de cadastro
Quando informo um e-mail válido
E informo o nome "Aaa"
E clico no botão Salvar
Então a mensagem "Informe pelo menos 4 letras para o nome" é exibida
