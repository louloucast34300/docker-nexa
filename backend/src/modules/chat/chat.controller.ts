import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from './chat.entity';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getAll(): Promise<Chat[]> {
    return await this.chatService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Chat> {
    return await this.chatService.findOne(+id);
  }

  @Post()
  async create(@Body() chatData: Partial<Chat>): Promise<Chat> {
    return await this.chatService.create(chatData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() chatData: Partial<Chat>): Promise<Chat> {
    return await this.chatService.update(+id, chatData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.chatService.remove(+id);
  }
}