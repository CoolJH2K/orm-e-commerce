const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json (err);
  }
});

// GET a single category
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params,id, {
      include: [{model: Product, through: Tag, as: "available_products"}]
    });
    if (!categoryData) {
      res.status(404).json({message: "No category with this ID."});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
