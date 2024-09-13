//import 라이브러리
import React, {useState, useContext } from'react';
 

 const EditForm = () => {
 
 return (
 <>
 <h1>전화번호부</h1>
 <h2>전화번호-수정폼</h2>
 <p>아래의 항목을 입력한 후 수정 버튼을 클릭해주세요.</p>
 <form>
    <div>
        <label for="txt-name">이름(name): </label><input type='text'id="txt-name" name="name"  value="" placeholder="이름"/>
    </div>
    <div>
        <label for="txt-hp">핸드폰(hp): </label><input type='text'id="txt-hp" name="hp"  value="" placeholder="핸드폰"/>
    </div>
    <div>
        <label for="txt-company">회사(company): </label><input type='text'id="txt-company" name="company"  value="" placeholder="회사"/>
    </div>    
  </form>
        <input type="hidden" name="action" value="update"/>
		<input type="hidden" name="no" value=""/>
		
		<button type="submit">수정(전송)</button>

 

    </>      
    );
}
    


 export default EditForm;