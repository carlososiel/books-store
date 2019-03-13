import { Controller, Get } from '@nestjs/common';

import { Book } from '../../interfaces/book.interface';

@Controller('books')
export class BookController {
    
    @Get()
    getAll(): Book[] {
        return [
            {
                title: 'Cien años de soledad',
                author: 'Grabiel Garcia Marquez',
                year: '1984',
                isbn: '1145'
            },
            {
                title: 'El viejo y el mar',
                author: 'Ernest Heminguay',
                year: '1957',
                isbn: '989897'
            },
        ]
    }
}
