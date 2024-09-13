
import React, {useState, useContext } from 'react';
import{ Link} from'react-router-dom'



const List = ()=>{

   const element=<h1>안녕하세요</h1>;
   
        return(
            <>
            <h1>전화번호부</h1>
            <h2>전화번호-리스트</h2>
            <p>등록된 전화번호 리스트입니다</p>
            <table border ="1">
                <tbody>
                    <tr>
                        <th>이름(name)</th>
                        <td>정우성</td> 
                    </tr>
                    <tr>
                        <th>핸드폰(hp)</th>
                        <td>010-0000-0000</td> 
                    </tr>
                    <tr>
                        <th>회사(company)</th>
                        <td>010-2233-4444</td> 
                    </tr>
                    <tr>
                        <td><Link to={""} target="_blank" rel="noreferrer noopener">수정</Link></td>
                        <td>[삭제]</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <Link to={""} target="_blank" rel="noreferrer noopener">등록폼으로 이동</Link>
            </>
        );
    }
    


export default List;
