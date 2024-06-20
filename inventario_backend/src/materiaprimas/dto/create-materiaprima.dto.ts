import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateMateriaprimaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @MinLength(3, { message: 'El campo nombre no debe ser menor a 3 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion no debe ser vacío' })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MaxLength(300, { message: 'El campo descripcion no debe ser mayor a 300 caracteres' })
  @MinLength(5, { message: 'El campo descripcion no debe ser menor a 3 caracteres' })
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo unidadMedida no debe ser vacío' })
  @IsString({ message: 'El campo unidadMedida debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo unidadMedida no debe ser mayor a 50 caracteres' })
  @MinLength(2, { message: 'El campo unidadMedida no debe ser menor a 2 caracteres' })
  readonly unidadMedida: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precioUnitario no debe ser vacío' })
  @IsString({ message: 'El campo precioUnitario debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo precioUnitario no debe ser mayor a 20 caracteres' })
  @MinLength(3, { message: 'El campo precioUnitario no debe ser menor a 3 caracteres' })
  readonly precioUnitario: string;
}
