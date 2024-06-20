import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { LadrillosModule } from './ladrillos/ladrillos.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { MateriaprimasModule } from './materiaprimas/materiaprimas.module';
import { AuthModule } from './auth/auth.module';

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
    LadrillosModule,
    EmpleadosModule,
    MateriaprimasModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
