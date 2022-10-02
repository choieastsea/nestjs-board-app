//interface/class로 모델 정의 가능
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; //비밀글인지 공개글인지 구분
}

export enum BoardStatus {
  //둘 중 한 값만 갖도록 함
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
