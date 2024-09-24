//import 라이브러리
import React from'react';
import { Link } from 'react-router-dom';
 
 const ItemPerson = (props) => {

    const {person,delPerson}= props;
    console.log(person);

 /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
 return (
 <>
            <div>
               
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>이름(name)</th>
                                <td>{person.name}</td>
                            </tr>
                            <tr>
                                <th>핸드폰(hp)</th>
                                <td>{person.hp}</td>
                            </tr>
                            <tr>
                                <th>회사(company)</th>
                                <td>{person.company}</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to={`/editform/${person.personId}`} target="_blank" rel="noreferrer noopener">수정</Link>
                                </td>
                                <td><button type='button' onClick={()=>{return delPerson(person.personId)} }>삭제</button></td>
                            
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
            

            <Link to="/writeform" target="_blank" rel="noreferrer noopener">등록폼으로 이동</Link>
        

 </>
 );
 }
 export default ItemPerson;