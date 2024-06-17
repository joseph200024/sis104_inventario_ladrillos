import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { EmpleadoElaboradoresModule } from './empleado_elaboradores/empleado_elaboradores.module';
import { LadrillosModule } from './ladrillos/ladrillos.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { MateriaPrimasModule } from './materia_primas/materia_primas.module';
import { DetalleProduccionesModule } from './detalle_producciones/detalle_producciones.module';
import { DetalleOrdenComprasModule } from './detalle_orden_compras/detalle_orden_compras.module';
import { OrdenComprasModule } from './orden_compras/orden_compras.module';
import { ProduccionesModule } from './producciones/producciones.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '*/.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsuariosModule,
    ProveedoresModule,
    EmpleadoElaboradoresModule,
    LadrillosModule,
    InventariosModule,
    MateriaPrimasModule,
    DetalleProduccionesModule,
    DetalleOrdenComprasModule,
    OrdenComprasModule,
    ProduccionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
