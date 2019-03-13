import { Module } from '@nestjs/common';

import { BookController } from './controllers/book/book.controller';

@Module({
    controllers: [BookController]
})
export class BooksModule {}
