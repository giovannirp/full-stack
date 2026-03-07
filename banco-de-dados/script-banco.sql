-- Tabela Departamento
CREATE TABLE TabelaDepartamento (
    id_departamento VARCHAR(20) NOT NULL PRIMARY KEY,
    NomeDepartamento VARCHAR(50) NOT NULL,
    NumeroDepartamento VARCHAR(20) NOT NULL
);

-- Tabela Colaboradores
CREATE TABLE TabelaColaboradores (
    id_colaborador VARCHAR(20) NOT NULL PRIMARY KEY,
    Salario DECIMAL NOT NULL,
    NomeColaborador VARCHAR(50) NOT NULL,
    EmailColaborador VARCHAR(50),
    Cargo VARCHAR(50) NOT NULL,
    CPFColaborador VARCHAR(11) NOT NULL,
    TelefoneColaborador VARCHAR(11) NOT NULL,
    id_departamento VARCHAR(20) NOT NULL,
    CONSTRAINT fk_colaborador_departamento FOREIGN KEY (id_departamento) REFERENCES TabelaDepartamento(id_departamento)
);

-- Tabela Clientes
CREATE TABLE TabelaClientes (
    id_cliente VARCHAR(20) NOT NULL PRIMARY KEY,
    DataNascimento DATE NOT NULL,
    CPF VARCHAR(11) NOT NULL,
    Nome VARCHAR(50) NOT NULL,
    Email VARCHAR(50),
    Rua VARCHAR(50) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Estado CHAR(2) NOT NULL,
    CEP CHAR(8) NOT NULL,
    id_colaborador VARCHAR(20) NOT NULL,
    CONSTRAINT fk_cliente_colaborador FOREIGN KEY (id_colaborador) REFERENCES TabelaColaboradores(id_colaborador)
);

-- Tabela Telefones
CREATE TABLE TabelaTelefones (
    id_telefone VARCHAR(20) NOT NULL PRIMARY KEY,
    Telefone VARCHAR(11) NOT NULL CHECK (LENGTH(Telefone) >= 7),
    id_cliente VARCHAR(20) NOT NULL,
    CONSTRAINT fk_telefone_cliente FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente)
);

-- Tabela Emprestimo
CREATE TABLE TabelaEmprestimo (
    id_emprestimo VARCHAR(20) NOT NULL PRIMARY KEY,
    Status BOOLEAN NOT NULL,
    Prazo INTEGER NOT NULL,
    DataInicio DATE NOT NULL,
    Tipo VARCHAR(20) NOT NULL,
    Valor DECIMAL NOT NULL,
    id_cliente VARCHAR(20) NOT NULL,
    CONSTRAINT fk_emprestimo_cliente FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente)
);

-- Tabela Pagamentos
CREATE TABLE TabelaPagamentos (
    id_pagamento VARCHAR(20) NOT NULL PRIMARY KEY,
    DataPagamento DATE NOT NULL,
    Valor DECIMAL NOT NULL,
    Status VARCHAR(20) NOT NULL,
    id_emprestimo VARCHAR(20) NOT NULL,
    CONSTRAINT fk_pagamento_emprestimo FOREIGN KEY (id_emprestimo) REFERENCES TabelaEmprestimo(id_emprestimo)
);

-- Tabela ScoreCredito
CREATE TABLE TabelaScoreCredito (
    id_score VARCHAR(20) NOT NULL PRIMARY KEY,
    DataConsulta DATE NOT NULL,
    Fonte VARCHAR(50) NOT NULL,
    Pontuacao INTEGER NOT NULL,
    Justificativa TEXT,
    id_cliente VARCHAR(20) NOT NULL,
    CONSTRAINT fk_score_cliente FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente)
);

-- Tabela Conta
CREATE TABLE TabelaConta (
    id_conta VARCHAR(20) NOT NULL PRIMARY KEY,
    NumeroConta VARCHAR(20) NOT NULL,
    TipoConta VARCHAR(50) NOT NULL,
    Saldo DECIMAL NOT NULL,
    DataAbertura DATE
);

-- Tabela ClienteConta
CREATE TABLE TabelaClienteConta (
    id_conta VARCHAR(20) NOT NULL,
    id_cliente VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_conta, id_cliente),
    CONSTRAINT fk_cliente_conta_cliente FOREIGN KEY (id_cliente) REFERENCES TabelaClientes(id_cliente),
    CONSTRAINT fk_cliente_conta_conta FOREIGN KEY (id_conta) REFERENCES TabelaConta(id_conta)
);
