/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/require-await */
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CountryModel } from '../model';
import { CountryService } from '../providers';

@Resolver(() => CountryModel)
export class CountryResolver {
  constructor(private countryService: CountryService) {}

  @Query(() => String)
  public async hello(): Promise<any> {
    return 'world';
  }

  @Query(() => [CountryModel])
  public async getCountries(): Promise<CountryModel[]> {
    return this.countryService.getCountries();
  }

  @Query(() => Boolean)
  public async removeCountry(@Args('id', { type: () => ID }) id: number): Promise<boolean> {
    return this.countryService.removeCountry(id);
  }
}
