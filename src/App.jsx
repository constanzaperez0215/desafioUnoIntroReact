import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyCard from './componentes/MyCard'
import Header from './componentes/Header'
import Footer from './componentes/Footer'



const App = ()=>{
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <div className='contenedor'>
        <MyCard img='https://cdn.pixabay.com/photo/2019/09/08/05/04/siberian-husky-4460138_1280.jpg' name="Bartolo" desc="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" raza="Husky" bgColor="success" />
        <MyCard img='https://cdn.pixabay.com/photo/2017/08/29/20/47/dog-2694848_1280.jpg' name="Messi" desc="Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" raza="Bobtile" bgColor="primary"/>
        <MyCard img='https://cdn.pixabay.com/photo/2016/10/07/12/51/dog-1721499_1280.jpg' name="Gohan" desc="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!" raza="Shar Pei" bgColor="danger"/>
        <MyCard img='https://cdn.pixabay.com/photo/2018/12/15/16/01/beagle-3877115_1280.jpg' name="Princesa" desc="Es una compañera leal y cariñossa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!" raza="Beagle" bgColor="warning"/>
        <MyCard img='https://cdn.pixabay.com/photo/2014/01/20/15/02/german-shepherd-248622_1280.jpg' name="Juanito" desc="Es un fiel compañero que te acompañará adónde vayas. ¡Acompaña a Juanito en sus aventuras!" raza="Quilterry" bgColor="secondary"/>
      </div>
      <Footer fin="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero ideal para siempre." />
    </>
  
  )
}



export default App
