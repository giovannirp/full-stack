
INSERT INTO TabelaDepartamento (id_departamento, NomeDepartamento, NumeroDepartamento)
VALUES
('D01', 'Recursos Humanos', 'RH01'),
('D02', 'Financeiro', 'FN01'),
('D03', 'TI', 'TI01'),
('D04', 'Marketing', 'MK01'),
('D05', 'Vendas', 'VD01');


INSERT INTO TabelaColaboradores (id_colaborador, Salario, NomeColaborador, EmailColaborador, Cargo, CPFColaborador, TelefoneColaborador, id_departamento)
VALUES
('C01', 5000.00, 'João Silva', 'joao@email.com', 'Gerente', '12345678901', '11987654321', 'D01'),
('C02', 4500.00, 'Maria Oliveira', 'maria@email.com', 'Gerente', '98765432100', '11923456789', 'D02'),
('C03', 6000.00, 'Carlos Souza', 'carlos@email.com', 'Gerente', '11223344556', '11934567890', 'D03'),
('C04', 4000.00, 'Ana Costa', 'ana@email.com', 'Gerente', '99887766554', '11945678901', 'D04'),
('C05', 5500.00, 'Pedro Lima', 'pedro@email.com', 'Gerente', '88776655443', '11956789012', 'D05');


INSERT INTO TabelaClientes (id_cliente, DataNascimento, CPF, Nome, Email, Rua, Bairro, Cidade, Estado, CEP, id_colaborador)
VALUES
('CL01', '1990-01-01', '32165498701', 'Lucas Silva', 'lucas@email.com', 'Rua A', 'Centro', 'São Paulo', 'SP', '12345678', 'C05'),
('CL02', '1985-05-15', '65498732102', 'Julia Costa', 'julia@email.com', 'Rua B', 'Zona Norte', 'Rio de Janeiro', 'RJ', '87654321', 'C05'),
('CL03', '1995-09-10', '98712365403', 'Roberto Lima', 'roberto@email.com', 'Rua C', 'Centro', 'Curitiba', 'PR', '45678912', 'C05'),
('CL04', '2000-12-20', '15975348604', 'Fernanda Rocha', 'fernanda@email.com', 'Rua D', 'Sul', 'Porto Alegre', 'RS', '56789123', 'C05'),
('CL05', '1993-04-18', '75315948605', 'Paula Mendes', 'paula@email.com', 'Rua E', 'Leste', 'Salvador', 'BA', '67891234', 'C05');


INSERT INTO TabelaTelefones (id_telefone, Telefone, id_cliente)
VALUES
('T01', '11987654321', 'CL01'),
('T02', '21912345678', 'CL02'),
('T03', '41934567890', 'CL02'),
('T04', '51956789012', 'CL04'),
('T05', '71923456789', 'CL04');



INSERT INTO TabelaEmprestimo (id_emprestimo, Status, Prazo, DataInicio, Tipo, Valor, id_cliente)
VALUES
('E01', TRUE, 12, '2023-01-01', '  Pessoal', 5000.00, 'CL01'),
('E02', FALSE, 24, '2023-02-15', '  Imobiliário', 100000.00, 'CL02'),
('E03', TRUE, 36, '2023-03-10', 'Automóvel  ', 25000.00, 'CL03'),
('E04', TRUE, 18, '2023-04-20', ' Consignado', 15000.00, 'CL04'),
('E05', FALSE, 48, '2023-05-18', 'Pessoal', 7000.00, 'CL05');



INSERT INTO TabelaPagamentos (id_pagamento, DataPagamento, Valor, Status, id_emprestimo)
VALUES
('P01', '2023-02-01', 500.00, 'Pago', 'E01'),
('P02', '2023-03-01', 1000.00, 'Pago', 'E02'),
('P03', '2023-04-01', 700.00, 'Pendente', 'E03'),
('P04', '2023-05-01', 1200.00, 'Pago', 'E04'),
('P05', '2023-06-01', 800.00, 'Pendente', 'E05');



INSERT INTO TabelaScoreCredito (id_score, DataConsulta, Fonte, Pontuacao, Justificativa, id_cliente)
VALUES
('S01', '2023-01-15', 'Serasa', 800, 'Bom pagador', 'CL01'),
('S02', '2023-02-20', 'SPC', 650, 'Risco moderado', 'CL02'),
('S03', '2023-03-25', 'Boa Vista', 500, 'Risco alto', 'CL03'),
('S04', '2023-04-30', 'Serasa', 900, 'Excelente', 'CL04'),
('S05', '2023-05-05', 'SPC', 400, 'Muito alto risco', 'CL05');


INSERT INTO TabelaConta (id_conta, NumeroConta, TipoConta, Saldo, DataAbertura)
VALUES
('A01', '12345-6', 'Corrente', 1000.00, '2023-01-01'),
('A02', '22345-6', 'Poupança', 2000.00, '2023-02-01'),
('A03', '32345-6', 'Corrente', 1500.00, '2023-03-01'),
('A04', '42345-6', 'Poupança', 2500.00, '2023-04-01'),
('A05', '52345-6', 'Corrente', 3000.00, '2023-05-01');



INSERT INTO TabelaClienteConta (id_conta, id_cliente)
VALUES
('A01', 'CL01'),
('A02', 'CL02'),
('A03', 'CL03'),
('A04', 'CL04'),
('A05', 'CL05');

SELECT * FROM TabelaDepartamento;
SELECT * FROM TabelaColaboradores;
SELECT * FROM TabelaClientes;
SELECT * FROM TabelaTelefones;
SELECT * FROM TabelaEmprestimo;
SELECT * FROM TabelaPagamentos;
SELECT * FROM TabelaScoreCredito;
SELECT * FROM TabelaConta;
SELECT * FROM TabelaClienteConta;

