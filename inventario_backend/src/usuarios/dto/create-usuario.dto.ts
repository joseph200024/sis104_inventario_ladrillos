import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email no debe ser vacío' })
  @IsString({ message: 'El campo email debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo email no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo email no debe ser menor a 2 caracteres' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo password no debe ser vacío' })
  @IsString({ message: 'El campo password debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo email no debe ser mayor a 100 caracteres' })
  @MinLength(5, { message: 'El campo password no debe ser menor a 5 caracteres' })
  readonly password: string;
}
