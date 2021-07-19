import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateLocationDto {
  _id: string;
  @IsNotEmpty() @IsString() locationName: string;
  @IsNotEmpty() @IsString() description: string;
  @IsOptional() @IsString() website?: string;
  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  phone: string;
  @IsNotEmpty() @IsString() person: string;
  @IsNotEmpty()
  @IsNumber()
  coordinateX: number;
  @IsNotEmpty()
  @IsNumber()
  coordinateY: number;
}
