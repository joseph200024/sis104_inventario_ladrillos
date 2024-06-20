import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @MinLength(3, { message: 'El campo nombre no debe ser menor a 3 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo puesto no debe ser vacío' })
  @IsString({ message: 'El campo puesto debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo puesto no debe ser mayor a 100 caracteres' })
  @MinLength(10, { message: 'El campo puesto no debe ser menor a 10 caracteres' })
  readonly puesto: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo gmail no debe ser vacío' })
  @IsString({ message: 'El campo gmail debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo gmail no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo gmail no debe ser menor a 3 caracteres' })
  readonly gmail: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsNumber({}, { message: 'El campo telefono debe ser de tipo numérico' })
  readonly telefono: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo salario no debe ser vacío' })
  @IsNumber({}, { message: 'El campo salario debe ser de tipo numérico' })
  readonly salario: number;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fechaContratacion no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fechaContratacion debe ser de tipo fecha' })
  readonly fechaContratacion: Date;
}
