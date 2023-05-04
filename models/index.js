// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    // Stores foreign keys
    model: Tag,
    unique: false
  },
  // Define name
  as: "available_products"
})

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Tag,
    unique: false
  },
  as: "product_categories"
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: ""
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: ""
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
