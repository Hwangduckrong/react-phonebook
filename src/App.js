import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './views/List';
import WriteForm from './views/WriteForm';
import EditForm from './views/EditForm';
import List2 from './views/List2';
import List3 from './views/List3';
import ItemPerson from './views/ItemPerson';
  
function App(){
return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= '/list' element={<List/>} />
          <Route path= '/writeform' element={<WriteForm/>} />
          <Route path= '/editform/:no' element={<EditForm/>}/>
          <Route path= '/list2' element={<List2/>} />
          <Route path= '/list3' element={<List3/>} />
          <Route path= '/itemperson' element={<ItemPerson/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
