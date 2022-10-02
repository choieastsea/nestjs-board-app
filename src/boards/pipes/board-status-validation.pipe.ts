import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  //모든 커스텀 파이프는 pipetransform implement해야함 -> transform func 구현 필수
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`value : ${value}`);
    console.log(`metadata : `, metadata);
    //request : boards/~~id~~/status
    // value : asdf -> must be pulbic or private (or throw error)
    // metadata : { metatype: [Function: String], type: 'body', data: 'status' }
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options!`);
    }

    return value;
  }
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1; //status가 statusOption에 있는지 확인F
  }
}
