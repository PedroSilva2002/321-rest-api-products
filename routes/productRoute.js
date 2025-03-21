const { addProduit, deleteProduit, getAllProduits, updateProduit } = require('../controller/produitsController');
const router = require("express").Router();

/**
 * @swagger
 * /api/produits:
 *   post:
 *     summary: Add a new product
 *     description: Creates a new product in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               description:
 *                 type: string
 *               prix:
 *                 type: number
 *               quantite_en_stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product created successfully.
 */
router.route('/produits').post(addProduit);

/**
 * @swagger
 * /api/produits/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Deletes a product by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 */
router.delete('/produits/:id', deleteProduit);

/**
 * @swagger
 * /api/produits:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: A list of products.
 */
router.get('/produits', getAllProduits);

/**
 * @swagger
 * /api/produits/{id}:
 *   put:
 *     summary: Update a product
 *     description: Updates an existing product.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               description:
 *                 type: string
 *               prix:
 *                 type: number
 *               quantite_en_stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product updated successfully.
 */
router.put('/produits/:id', updateProduit);

module.exports = router;
