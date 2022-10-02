//dto는 클래스로 권장 (인터페이스와 다르게 런타임에서 작동하므로 파이프와 같은 기능을 이용할 때 유용)
import { IsNotEmpty } from 'class-validator';
export class CreateBoardDto {
  //decorator for validation pipe
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
