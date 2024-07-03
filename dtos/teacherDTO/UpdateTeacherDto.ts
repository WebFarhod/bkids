import { IsOptional, IsString } from "class-validator";
import { CreateTeacherDto } from "./CreateTeacherDto";
export class UpdateTeacherDto extends CreateTeacherDto {
  @IsOptional()
  @IsString()
  _id!: string;
}
