import ProductCard from './ProductCard'
import './ProductSection.css'

const ProductSection = ({ title, products, id }) => {
  // Show only first 10 products (5x2 grid)
  const displayedProducts = products.slice(0, 10)

  if (!products || products.length === 0) {
    return null
  }

  return (
    <section id={id} className="product-section">
      <div className="section-header">
        <h2>{title}</h2>
        {products.length > 10 && (
          <span className="products-count">Showing 10 of {products.length}</span>
        )}
      </div>
      <div className="products-grid-container">
        {displayedProducts.map(product => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection

