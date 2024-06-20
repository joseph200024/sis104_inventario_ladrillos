import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('materiaprimas')
export class Materiaprima {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  nombre: string;

  @Column('varchar', { length: 300 })
  descripcion: string;

  @Column('varchar', { length: 50 })
  unidadMedida: string;

  @Column('varchar', { length: 20 })
  precioUnitario: string;
}
