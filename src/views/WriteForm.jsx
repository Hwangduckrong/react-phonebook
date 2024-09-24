//import 라이브러리
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const WriteForm = () => {

    //상태관리 변수들
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [company, setCompany] = useState("");
    //일반변수
    const navigate = useNavigate();
   

    //일반 메소드

    //이벤트 관련 메소드

    //이름 입력할때

    let handleName = (event) => {
        console.log(event.target.value, "이름입력")
        setName(event.target.value);
        console.log("이름 값 변수가 value에 반영되고 있습니다.");
    }

    //전화번호 입력
    let handleHp = (event) => {
        console.log(event.target.value, "핸드폰입력")
        setHp(event.target.value);
        console.log("전화 번호 값 변수가 value에 반영되고 있습니다.");
    }

    //회사번호 입력
    let handleCompany = (e) => {
        console.log(e.target.value, "회사입력")
        setCompany(e.target.value);
        console.log("회사 번호 값 변수가 value에 반영되고 있습니다.");
    }

    //저장
    let handleSubmit = (e) => {

        //이벤트 잡는다
        console.log("전송");
        e.preventDefault();
        console.log("기본기능 방지, 못하게 막음");//결과를 데이터만 받는다. axios 써야한다. 그냥 어려우면 submit 있으면 막아라
        console.log(e.target);

        //데이터를 수집해라
        const personVo = {
            name: name,
            hp: hp,
            company: company
        }
        console.log(personVo);

        //서버로 데이터 전송(저장)
        axios({
            method: 'post',//리스트 불러오는 거는 get이었음,꼬랑지 안보임               
            url: 'http://localhost:9000/api/persons',
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put,보낼 때 제이슨으로 보낼꺼야
            data: personVo,     // put, post,  JSON(자동변환됨)

            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            if(response.data===1){
                //리다이렉트
                
                navigate("/list");//주소말고 어디로 보낼지 잘 써놔라
            }else
            alert("등록실패")

        }).catch(error => {
            console.log(error);
        });

    }

    return (
        <>
            <h1>전화번호부</h1>
            <h2>전화번호-등록폼</h2>
            <p>아래의 항목을 입력한 후 등록 버튼을 클릭해주세요.</p>

            <form action="/list" method="get" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="txt-name">이름(name): </label>
                    <input type='text' id='txt-name' name="name" value={name} placeholder="이름" onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="txt-hp">전화번호(hp): </label>
                    <input type='text' id='txt-hp' name="hp" value={hp} placeholder="핸드폰" onChange={handleHp} />
                </div>
                <div>
                    <label htmlFor="txt-company">회사(company): </label>
                    <input type='text' id='txt-company' name="company" value={company} placeholder="회사" onChange={handleCompany} />
                </div>
            </form>
            <input type="hidden" name="action" value="insert" />
            <button type='submit' onClick={handleSubmit}>등록(전송)</button><br />
            <Link to='/list' target="_blank" rel="noreferrer noopener">리스트로 이동</Link>
        </>
    );
}
export default WriteForm;