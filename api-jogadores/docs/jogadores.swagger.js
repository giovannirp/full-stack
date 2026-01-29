/**
 * @swagger
 * tags:
 *   name: Jogadores
 *   description: Gerenciamento de jogadores
 */

/**
 * @swagger
 * /jogadores:
 *   get:
 *     summary: Lista todos os jogadores
 *     tags: [Jogadores]
 *     responses:
 *       200:
 *         description: Lista de jogadores
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: Dimba
 *               - id: 2
 *                 nome: Rafinha
 */

/**
 * @swagger
 * /jogadores:
 *   post:
 *     summary: Cadastra um novo jogador
 *     tags: [Jogadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Giovanni
 *     responses:
 *       201:
 *         description: Jogador cadastrado com sucesso
 */

/**
 * @swagger
 * /jogadores/{id}:
 *   get:
 *     summary: Busca um jogador pelo ID
 *     tags: [Jogadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Jogador encontrado
 *       404:
 *         description: Jogador não encontrado
 */

/**
 * @swagger
 * /jogadores/{id}:
 *   put:
 *     summary: Atualiza um jogador pelo ID
 *     tags: [Jogadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Giovanni Messias
 *     responses:
 *       200:
 *         description: Jogador atualizado com sucesso
 *       400:
 *         description: Nome obrigatório
 *       404:
 *         description: Jogador não encontrado
 */

/**
 * @swagger
 * /jogadores/{id}:
 *   delete:
 *     summary: Remove um jogador pelo ID
 *     tags: [Jogadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Jogador removido com sucesso
 *       404:
 *         description: Jogador não encontrado
 */