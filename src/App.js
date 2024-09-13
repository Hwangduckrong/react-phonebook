import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './views/List';
import WriteForm from './views/WriteForm';
import EditForm from './views/EditForm';
  
function App(){
return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= '/list' element={<List/>} />
          <Route path= '/writeform' element={<WriteForm/>} />
          <Route path= '/editform' element={<EditForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
