import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, defaultCategorys } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}
  async defaultcategory() {
    for (const defaultCategory of defaultCategorys) {
      const category = this.categoryRepo.create(defaultCategory);

      await this.categoryRepo.save(category);
    }
  }
}
