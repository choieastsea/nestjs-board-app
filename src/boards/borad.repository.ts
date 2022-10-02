import { Repository } from 'typeorm';
import { Board } from './board.entity'; //repo를 사용하기 위해 entity에서 객체를 가져온다.(model에서 가져오는 것 아님!)
export class BoardRepository extends Repository<Board> {}
