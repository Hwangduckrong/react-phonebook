//import 라이브러리
import React, { useEffect,useState } from 'react';


const EditForm = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [personList, setPersonList] = useState([]);



    /*---일반 메소드 --------------------------------------------*/
    const getPersonList = () => {
        axios({
            method: 'get', // put, post, delete                   
            url: 'http://localhost:9000/api/persons'+no,
            responseType: 'json' // 수신 타입
        }).then(response => {
            console.log(response.data); // 수신 데이터
            setPersonList(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    // 마운트 되었을 때 실행되는 useEffect
    useEffect(() => {
        console.log("마운트 됐어요");
        getPersonList();
    }, []); // 빈 배열을 넣으면 마운트 시 한 번만 실행

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <h1>전화번호부</h1>
            <h2>전화번호-수정폼</h2>
            <p>아래의 항목을 입력한 후 수정 버튼을 클릭해주세요.</p>
            <form>
                <div>
                    <label for="txt-name">이름(name): </label><input type='text' id="txt-name" name="name" value="" placeholder="이름" />
                </div>
                <div>
                    <label for="txt-hp">핸드폰(hp): </label><input type='text' id="txt-hp" name="hp" value="" placeholder="핸드폰" />
                </div>
                <div>
                    <label for="txt-company">회사(company): </label><input type='text' id="txt-company" name="company" value="" placeholder="회사" />
                </div>
            </form>
            <input type="hidden" name="action" value="update" />
            <input type="hidden" name="no" value="" />

            <button type="submit">수정(전송)</button>



        </>
    );
}



export default EditForm;