//import 라이브러리
import React from'react';
import { Link } from 'react-router-dom';
 const WriteForm = () => {
 
 return (
 <>
 <h1>전화번호부</h1>
	<h2>전화번호-등록폼</h2>
	<p>아래의 항목을 입력한 후 등록 버튼을 클릭해주세요.</p>

    <form>
        <div>
            <label for="txt-name">이름(name): </label>
            <input type='text' id='txt-name' name="name" valeu="" placeholder="이름"/>
        </div>
        <div>
            <label for="txt-hp">전화번호(hp): </label>
            <input type='text' id='txt-hp' name="hp" valeu="" placeholder="핸드폰"/>
        </div>
        <div>
            <label for="txt-company">회사(company): </label>
            <input type='text' id='txt-company' name="company" valeu="" placeholder="회사"/>
        </div>
    </form>
	<input type="hidden" name="action" value="insert"/>
<Link to='' target="_blank" rel="noreferrer noopener">등록폼으로 이동</Link>
 </>
 );
 }
 export default WriteForm;