import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
  ) {}

  findAll(): Promise<Chat[]> {
    console.log('ChatService:', this.chatRepository.find());
    return this.chatRepository.find();
  }

  async findOne(id: number): Promise<Chat> {
    const chat = await this.chatRepository.findOneBy({ id });
    if (!chat) {
      throw new Error(`Chat with id ${id} not found`);
    }
    return chat;
  }

  create(chatData: Partial<Chat>): Promise<Chat> {
    const chat = this.chatRepository.create(chatData);
    return this.chatRepository.save(chat);
  }

  async update(id: number, chatData: Partial<Chat>): Promise<Chat> {
    await this.chatRepository.update(id, chatData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.chatRepository.delete(id);
  }
}