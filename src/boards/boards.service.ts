import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    // console.log('getAllBoards');
    return this.boards;
  }
  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(), //unique id를 생성해주는 library
      title,
      description,
      status: BoardStatus.PUBLIC, //생성시에는 기본적으로 public
    };
    this.boards.push(board);
    return board;
  }
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      //찾는 게시물이 없을 때는 예외 인스턴스 생성
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
  deleteBoardById(id: string): void {
    const found = this.getBoardById(id); //못찾으면 바로 에러 나가게 될 것임
    this.boards.filter((board) => board.id !== found.id);
  }
  updateBoardStatus(id: string, status: BoardStatus): Board {
    //해당 id의 게시글의 상태를 status로 세팅한다
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
