## Kenzie Hub
Projeto realizado no terceiro módulo do curso de **Formação em Desenvolvimento Full Stack da Kenzie Academy Brasil**

A ideia desse projeto é praticar os conceitos de **React** e **TypeScript**, desenvolvendo uma aplicação que simula um hub de portfólios de programadores.

Bibliotecas React utilizadas:
- **React Hook Form**;
- **Yup**;
- **Toastify**;
- **Axios**;
- **Framer Motion**;
- **React Icons**;
- **React Router Dom**;
- **Styled Components**.

Aspectos técnicos/ funcionalidades:

- **Registro** de usuário
1. Criação de um formulário de cadastro com as devidas validações:  

   1.1. Todos os campos obrigatórios;
  
   1.2. E-mail fornecido no formato adequado;

   1.3. Senha com no mínimo 8 caracteres, sendo necessário ter letras, números e ao menos 
   um símbolo;

   1.4. Confirmação de senha;
2. Criação da função de cadastro, a qual realiza uma requisição POST no submit do formulário de cadastro;
3. Presença de notificações de sucesso e erro;
4. Em caso de sucesso, o usuário é redirecionado para a tela de login.

- **Login** de usuário
1. Criação de um formulário de login com todos os campos obrigatórios;
2. Criação da função de login, a qual realiza uma requisição POST no submit do formulário de login;
3. Presença de notificações de sucesso e erro;
4. Em caso de sucesso, o data.user é armazenado no state user, e o data.token junto com o data.user.id são armazenados no localStorage. Após isso, o usuário é redirecionado para a dashboard.

- **Dashboard**
1. Criação de uma página Dashboard, responsável por renderizar as informações do usuário;
2. Criação da função de logout, a qual limpa o state user e o localStorage;
3. Criação e listagem das tecnologias do usuário logado;
4. Possibilidade de exclusão de determinada tecnologia;
5. Presença de um toast de erro quando necessário.

**https://react-entrega-s2-formulario-de-cadastro-bruna-dalla.vercel.app/login**
