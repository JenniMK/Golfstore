import Directory from '../../components/directory/directory.component';
import clubsImage from '../../assets/clubs.jpeg';
import womenImage from '../../assets/women.jpeg';
import menImage from '../../assets/men.jpeg';
import shoesImage from '../../assets/shoes.jpeg';
import accessoriesImage from '../../assets/accessories.jpeg';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Clubs',
      imageUrl: clubsImage,
    },
    {
      id: 2,
      title: 'Clothing women',
      imageUrl: womenImage,
    },
    {
      id: 3,
      title: 'Clothing men',
      imageUrl: menImage,
    },
    {
      id: 4,
      title: 'Shoes',
      imageUrl: shoesImage,
    },
    {
      id: 5,
      title: 'Accessories',
      imageUrl: accessoriesImage,
    },
  ];

  return (
    <Directory categories={categories} />
  )
}
export default Home;
