import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/entity';
import { Repository } from 'typeorm';

import { CountryModel } from '../model';

@Injectable()
export class CountryService {
  constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) {}

  public async getCountries(): Promise<CountryModel[]> {
    return this.countryRepository.find();
  }

  public async removeCountry(id: number): Promise<boolean> {
    const country = await this.countryRepository.findOneBy({ id });
    if (country) {
      await this.countryRepository.remove(country);
      return true;
    }
    return false;
  }
}
