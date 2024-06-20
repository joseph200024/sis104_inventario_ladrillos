import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateLadrilloDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tipo no debe ser vacío' })
  @IsString({ message: 'El campo tipo debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo tipo no debe ser mayor a 100 caracteres' })
  @MinLength(3, { message: 'El campo tipo no debe ser menor a 3 caracteres' })
  readonly tipo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo dimension no debe ser vacío' })
  @IsString({ message: 'El campo dimension debe ser de tipo cadena' })
  @MaxLength(200, { message: 'El campo dimension no debe ser mayor a 200 caracteres' })
  @MinLength(10, { message: 'El campo dimension no debe ser menor a 10 caracteres' })
  readonly dimension: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo peso no debe ser vacío' })
  @IsString({ message: 'El campo peso debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo peso no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo peso no debe ser menor a 3 caracteres' })
  readonly peso: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precioUnitario no debe ser vacío' })
  @IsString({ message: 'El campo precioUnitario debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo precioUnitario no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo precioUnitario no debe ser menor a 3 caracteres' })
  readonly precioUnitario: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion no debe ser vacío' })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MaxLength(300, { message: 'El campo descripcion no debe ser mayor a 300 caracteres' })
  @MinLength(5, { message: 'El campo descripcion no debe ser menor a 3 caracteres' })
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo stock no debe ser vacío' })
  @IsNumber({}, { message: 'El campo stock debe ser de tipo numérico' })
  readonly stock: number;
}
