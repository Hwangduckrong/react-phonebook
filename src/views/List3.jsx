
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ItemPerson from './ItemPerson';
const List3 = () => {

    // 상태 관리 변수(값이 변하면 화면에 랜더링)
    const [personList, setPersonList] = useState([]);

    // 일반 메소드: 서버에서 데이터 가져오기
    const getPersonList = () => {
        axios({
            method: 'get', // put, post, delete                   
            url: 'http://localhost:9000/api/persons',
            responseType: 'json' // 수신 타입
        }).then(response => {
            console.log(response.data); // 수신 데이터
            setPersonList(response.data.apiData);
        }).catch(error => {
            console.log(error);
        });
    };

    // 마운트 되었을 때 실행되는 useEffect
    useEffect(() => {
        console.log("마운트 됐어요");
        
        //서버에 리스트 데이터를 그리는 메소드 실행
        getPersonList();
    }, []); // 빈 배열을 넣으면 마운트 시 한 번만 실행
   
    //삭제버튼 클릭했을 때
    const handleDel=(no)=>{
        console.log("삭제버튼 클릭");
        axios({
            method: 'delete', 			// put, post, delete                   
            url: `http://localhost:9000/api/persons/${no}`,//백틱, 내가 쓰고싶은거 다쓰고 ${}써버려라
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            console.log(response.data.result);
                if(response.data.result==='success'){
                
                    /*setPersonList((prevList)=>{
                        prevList.filter((personVo));
                        return personVo.personId!==no;
                    }) 이게 원래 filter 용법 사용*/
                setPersonList(prevList => prevList.filter(personVo => personVo.personId !== no))// 간략한 filter용법 적용
                    
             
                }else
                alert(response.data.message);
           
            
            //filter에 대해 공부해보기
        }).catch(error => {
            console.log(error);
            alert("다시 시도해주세요")
        });
    }
    return (
        <>
            <h1>전화번호부</h1>
            <h2>전화번호-리스트</h2>
            <p>등록된 전화번호 리스트입니다</p>

            
            {personList.map((personVo) => (
                
                  <ItemPerson key={personVo.personId} 
                              person={personVo}
                              delPerson={handleDel}/>
                
            ))}

          </>
    );
}
 
         <Link to="/writeform" target="_blank" rel="noreferrer noopener">등록폼으로 이동</Link>
export default List3;