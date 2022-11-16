# Calendar-back

Rotas implementadas: 


### Events: 
- **Criar(/events):** <br>
 Para criar um event a API espera receber por body:

  ```
  {
    "title": "seila",
    "end": "Wed Nov 16 2022 18:34:25 GMT-0300",
    "start": "Wed Nov 16 2022 18:34:25 GMT-0300"
  }
  ```
  
  **Retornos:** <br>
   Caso algum dos campos acima não sejam enviados será retornado o status 422 (Joi Validation) <br>
   Caso esteja tudo correto será retornado o status 201 (Criado com sucesso) <br>
   
- **Buscar(/events):** <br>
  Caso seja realizada a requisição GET nesse end point será retornada todas os eventos no formato:
  ```
  {
    "id": 1
    "title": "seila",
    "end": "Wed Nov 16 2022 18:34:25 GMT-0300",
    "start": "Wed Nov 16 2022 18:34:25 GMT-0300"
  },
  {
    "id": 2
    "title": "seila",
    "end": "Wed Nov 16 2022 18:34:25 GMT-0300",
    "start": "Wed Nov 16 2022 18:34:25 GMT-0300"
  }
  ```
  

- **Deletar(/events/{id}):** <br>
Retorno 200 para um objeto deletado com sucesso.
Retorna 404 caso nao seja encontrado pelo id.
