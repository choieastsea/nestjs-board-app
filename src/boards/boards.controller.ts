import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }
  @Get('/:id') //루트 뒤에 문자열이 오는 경우 해당 문자열을 id로 받아들일 것
  getBoardById(@Param('id') bid): Board {
    return this.boardsService.getBoardById(bid);
  }
  @Post()
  @UsePipes(ValidationPipe) //handler-level's pipe를 사용하기 위해 데코레이터 추가. DTO에 정의된 validation을 거치도록 한다.
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
  @Delete('/:id')
  deleteBoard(@Param('id') bid: string): void {
    this.boardsService.deleteBoardById(bid);
  }
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') bid: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus, //parameter level의 커스텀 파이프-> status에 원하지 않는 값 들어오는 경우 처리하기 위해
  ) {
    return this.boardsService.updateBoardStatus(bid, status);
  }
}
