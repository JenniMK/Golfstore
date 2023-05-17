

const App = () => {

const categories = [
  {
    id: 1,
    title: 'Clubs',
  },
  {
    id: 2,
    title: 'Clothing women',
  },
  {
    id: 3,
    title: 'Clothing men',
  },
  {
    id: 4,
    title: 'Shoes',
  },
  {
    id: 5,
    title: 'Accessories',
    },
]

  return (
    <div className='categories-container'>
      {categories.map(({ title }) => (
        <div className='category-container'>
        {/*<img />*/}
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
      ))}
    
    </div>
  )
}
export default App;
