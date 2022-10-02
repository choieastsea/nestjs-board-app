//interface/class로 모델 정의 가능
// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus; //비밀글인지 공개글인지 구분
// } ->db 사용한다면 굳이 필요가 없음 & enum만 필요하니까 파일 이름 변경

export enum BoardStatus {
  //둘 중 한 값만 갖도록 함
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
