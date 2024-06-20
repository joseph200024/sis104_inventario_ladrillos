import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ladrillos')
export class Ladrillo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  tipo: string;

  @Column('varchar', { length: 200 })
  dimension: string;

  @Column('varchar', { length: 50 })
  peso: string;

  @Column('varchar', { length: 50 })
  precioUnitario: string;

  @Column('varchar', { length: 300 })
  descripcion: string;

  @Column('int')
  stock: number;
}
