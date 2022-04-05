			JAVA	/	SPRING BOOT	/	DOCKER	/	KUBERNETES
			===================================================
			
	1.	Classes DTO serão utilizadas como retornos JSON nos métodos da camada Controller.
	
	2.	NullPointerException    Ocorre quando chamo um método de uma classe não instanciada.
	
	3.	Quando um atributo ou lista for utilizado em mais de um método, define-se o atributo/lista como estático.
	
	4.	O @PostConstruct faz com que o método seja executado logo depois que o contêiner inicializa a classe que o invoca.
	
	5.	Todos os Beans do Spring são instanciados na inicialização da aplicação;
	
	6.	Comlo converter entidades para DTOs sem código boilerplate com ModelMapper:
		a.	https://www.youtube.com/watch?v=HU7bfKG8nV4			ou,
		b.	List<CategoryDTO> listDTO = list.stream().map(obj -> service.fromDTO(obj)).collect(Collectors.toList());
	
	7.	** retirado do Projeto: Api-library					ou,
		https://www.youtube.com/watch?v=B1taCPYZvJM

	8.	Atributos Statics : 
		a.	Para todos os objetos dessa classe, o valor do atributo static esta apontado para o mesmo endereço de memória, ou seja, o valor do atributo é o mesmo para todos os Objetos.
		b.	Quando em algum objeto, o atributo static for alterado, essa alteração valerá para todos os demais objetos.
		c.	Não é necessário instanciar o objeto para utilizar o atributo;


	9.	Método Static: 
		a.	Não é necessário instanciar o objeto para utilizar o método;
		b.	Um exemplo são os métodos da classe Math;
	
	10.	Para verificar se uma porta esta executando:
		a.	Abra o CMD como Adm;
		b.	execute: netstat -o -n -a;
		c.	Procure na coluna Endereco local o Ip que esta executando a porta. exemplo:
			i.	Protocolo                End Local                          PID
			ii.	TCP                      0.0.0.0:3306                      6336
		d.	Para Alterar a porta que irá rodar o projeto:
			i.	No application.properties incluir :	server.port=8081

	11.	Para Para converter a lista de objetos do tipo Categoria para CategoriaDTO:
		a.	** o objeto categoriaList é uma Lista do tipo <Categoria>
		b.	List<CategoriaDTO> categoriaDtoList = categoriaList.stream().map(obj -> new CategoriaDTO(obj)).collect(Collectors.toList());

	12.	GIT
		a.	Git Init
		b.	Git config –global user.name “FlvAvsGit”
		c.	Git config –global user.email flvavsgit@gmail.com
		d.	Git remote add origin https://github.com/FlvAvsGit/nome-do-repositorio-remoto
		e.	Git Status
		f.	Git Add .
		g.	Git commit -m “Commit inicial”
		h.	Git push -u origin master
	
	12.1	 create a new repository on the command line	
		echo "# Interface-1" >> README.md
		a.	git init
		b.	git add README.md
		c.	git commit -m "first commit"
		d.	git branch -M main
		e.	git remote add origin https://github.com/FlvAvsGit/Interface-1.git
		f.	git push -u origin main
		
	12.2	push an existing repository from the command line
		a.	git remote add origin https://github.com/FlvAvsGit/Interface-1.git
		b.	git branch -M main
		c.	git push -u origin main
		
	13. LocalDate.now() 			==> Data de hoje
		LocalDate.now().plusDays(1) ==> Data de Hoje + 1 dia
		
	14.	