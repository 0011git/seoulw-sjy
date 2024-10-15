import React from 'react'
import axios from 'axios'
import { xmlTOjson } from '@/utils/apiFunc';
var convert = require('xml-js');

/** thisweek용 시작일, 종료일 구하기 */
function getThisWeekDate() {
  function dateFormat (date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`
  }

  const today = new Date();
  const dayIndex = today.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
  const endDate = new Date(today); // stdate 복사
  endDate.setDate(today.getDate() + (7-dayIndex));
  const stdate = dateFormat(today)
  const eddate = dateFormat(endDate)
  return {stdate, eddate}   
}
let {stdate, eddate} = getThisWeekDate();


//api 관련 기본 변수
const API_KEY = '7b1ab9ea464e4d70ad4c8bad7505f532';
const defaultParams = {
  service: API_KEY,
  rows: '20',   //요청개수
  signgucode: '11',
  stdate: '20240101',
  eddate: '20241231'
};
const thisWeekParams = {
  service: API_KEY,
  rows: '20',
  signgucode: '11',
  stdate: stdate,
  eddate: eddate
}

const instance = axios.create({
  baseURL: 'http://www.kopis.or.kr/openApi/restful/pblprfr',
  params: defaultParams
});



// [↓] 메인(store에 저장) 시작======================================================================
async function apiMain(res){
  const genreParams = [
    { shcate: 'GGGA', label: 'musical' }, // 뮤지컬
    { shcate: 'AAAA', label: 'play' }, // 연극
    { shcate: 'CCCD', label: 'pop' }, // 대중음악
    { shcate: 'BBB', label: 'dance' }, // 무용
    { shcae: 'CCCA', label: 'classic' }, // 서양음악
    { shcate: 'CCCC', label: 'gukak' }, // 국악
    { shcate: 'EEEB', label: 'circus' }, // 서커스/마술
    { shcate: 'EEEA', label: 'etc' } // 기타
  ];

  const requests = { genres: [], thisWeek: [], ing: [], upcoming: [] };
  genreParams.forEach(({ shcate }) => {
    const mainParams = {
      service: API_KEY,
      rows: '20',   //요청개수
      signgucode: '11',
      stdate: '20240101',
      eddate: '20241231',
      cpage: 1,
      shcate: shcate,
    };
    const mainThisWeekParams = {
      service: API_KEY,
      rows: '20',   //요청개수
      signgucode: '11',
      stdate: stdate,
      eddate: eddate,
      cpage: 1,
      shcate: shcate
    }
    // const detailResult = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/${mt20id}`, {params: {service:API_KEY} });

    requests.genres.push(axios.get('http://www.kopis.or.kr/openApi/restful/pblprfr', { params: { ...mainParams }})); //장르
    requests.thisWeek.push(axios.get('http://www.kopis.or.kr/openApi/restful/pblprfr', { params: { ...mainThisWeekParams } }));  //이번주
    requests.ing.push(axios.get('http://www.kopis.or.kr/openApi/restful/pblprfr', { params: { ...mainParams, prfstate: '02' } })); //공연중
    requests.upcoming.push(axios.get('http://www.kopis.or.kr/openApi/restful/pblprfr', { params: { ...mainParams, prfstate: '01' } }));  //공연예정

    //예시
    // requests.upcoming.push(instance.get('', { params: { ...mainParams, prfstate: '01' } }));  //공연예정
  });

  const results = await Promise.all([
    ...requests.genres,
    ...requests.thisWeek,
    ...requests.ing,
    ...requests.upcoming,
  ]);
  console.log('============================');
  
  // console.log(results[4]); 
  // 0뮤지컬 1연극 2대중음악 3무용 4클래식 여기서 오류남(섞여서 들어옴) 5국악 6서커스/마술 7기타

  // results.forEach((result) => {
  //   if(result.length !== 0){
  //     console.log(result.data);      
  //   }
  // })

  //results분류할 오브젝트
  const response = {
    genres: [],
    thisWeek: [],
    ing: [],
    upcoming: [],
  };
  
  //results를 각각의 배열에 맞게 분류
  results.forEach((result, index) => { 
    // 각 요청이 어떤 키에 해당하는지 계산
    const genreIndex = Math.floor(index / 4); // 장르 요청의 인덱스
    const requestTypeIndex = index % 4; // 요청 타입의 인덱스
    // console.log(`${index}: 장르번호:${genreIndex}  | 넷중:${requestTypeIndex}`);
    

    const genreLabel = genreParams[genreIndex].label; // 장르 라벨
    const typeLabel = ['genres', 'thisWeek', 'ing', 'upcoming'][requestTypeIndex]; // 요청 타입 라벨

    if (result.data !== null) {
      let dataGenre = xmlTOjson(result.data)
      response[typeLabel].push({ [genreLabel]: dataGenre }); // 성공 시 데이터 추가
    } else {
      response[typeLabel].push({ [genreLabel]: null }); // 실패 시 null 추가
    }
  });

  // console.log(response.genres);
  
  

  res.json(response);
}
// [↑] 메인(store) 종료=======================================================================================


// [↓] 카테고리 시작===================================================================================
// 장르별(1개)
async function apiGenre(shcate, cpage, res){
    const dataGenre = await instance.get('', {params: { cpage: `${cpage}`, shcate: `${shcate}`} }); //뮤지컬 GGGA
    res.json(xmlTOjson(dataGenre.data) );
} 

// 이번주(장르 1개)
async function apiThisWeek(shcate, cpage, res){
    const dataThisWeek = await instance.get('', {params: {...thisWeekParams, cpage: `${cpage}`, shcate: `${shcate}`} }); //뮤지컬 GGGA
    console.log('=======이번주========');
    console.log(dataThisWeek);
    res.json(xmlTOjson(dataThisWeek.data) );
}

// 공연중(장르 1개)
async function apiIng(shcate, cpage, res) {
  const dataIng = await instance.get('', {params: {cpage: `${cpage}`, shcate: `${shcate}`, prfstate: '02'} }); //뮤지컬 GGGA
  res.json(xmlTOjson(dataIng.data) );
}
// 공연예정(장르 1개)
async function apiUpcoming(shcate, cpage, res) {
  const dataUpcoming = await instance.get('', {params: {cpage: `${cpage}`, shcate: `${shcate}`, prfstate: '01'} }); //뮤지컬 GGGA
  res.json(xmlTOjson(dataUpcoming.data) );
}

// [↑] 카테고리 종료=============================================================================


// [↓] 서치 시작=====================================================================
async function apiSearch(searchWord, cpage, res){
  // let encodedWord = encodeURIComponent(searchWord);
  let title = await instance.get('', {params: {cpage: `${cpage}`, shprfnm:`${searchWord}`}}) 
  let venue = await instance.get('', {params: {cpage: `${cpage}`, shprfnmfct:`${searchWord}`}}) 
  
  let titleData = xmlTOjson(title.data);
  let venueData = xmlTOjson(venue.data);
  res.json({titleData,venueData});
}
// [↑] 서치 종료=============================================================================


// [↓] 디테일 시작=====================================================================================
//디테일
async function apiDetail(mt20id, res){
  const detailResult = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/${mt20id}`, {params: {service:API_KEY} });
  let detail = xmlTOjson(detailResult.data) ;
  let placeId = detail.mt10id._text;
  
  const detailMapResult = await axios.get(`http://www.kopis.or.kr/openApi/restful/prfplc/${placeId}`, {params: {service:API_KEY} });
  let detailMap = xmlTOjson(detailMapResult.data) ;

  res.json({detail,detailMap});
}

//디테일-맵
async function apiDetailMap (mt10id, res){
  const detailMap = await axios.get(`http://www.kopis.or.kr/openApi/restful/prfplc/${mt10id}`, {params: {service:API_KEY} });
  
  res.json(detailMap.data);
}
// [↑] 디테일 종료=============================================================================

export default async function handler(req, res){  
  const {type, shcate, cpage, searchWord, mt20id, mt10id} = req.query;
  // type api함수종류
  // shcate 장르
  // cpage 페이지
  // searchWord 검색어
  // mt20id 작품id
  // mt10id 장소id
  
  switch(type){
    case 'apiMain': await apiMain(res); break;

    case 'apiGenre': await apiGenre(shcate, cpage, res); break;
    case 'apiThisWeek': await apiThisWeek(shcate, cpage, res); break;
    case 'apiIng': await apiIng(shcate, cpage, res); break;
    case 'apiUpcoming': await apiUpcoming(shcate, cpage, res); break;

    case 'apiSearch': await apiSearch(searchWord,cpage,res); break;

    case 'apiDetail': await apiDetail(mt20id, res); break;
  
    default:break;
  }
}