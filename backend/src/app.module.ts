import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './modules/chat/chat.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // ex: 'postgres' si tu utilises docker-compose
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'nexa',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // À utiliser en dev uniquement, génère les tables automatiquement
    }),
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


