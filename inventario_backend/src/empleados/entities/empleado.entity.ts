import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  nombre: string;

  @Column('varchar', { length: 100 })
  puesto: string;

  @Column('varchar', { length: 50 })
  gmail: string;

  @Column('int')
  telefono: number;

  @Column('int')
  salario: number;

  @CreateDateColumn({ name: 'fecha_estreno' })
  fechaContratacion: Date;
}
