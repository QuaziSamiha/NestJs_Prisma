import { Injectable } from '@nestjs/common';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { CreateArtistDto } from './dto/create-artist.dto';
// import { Prisma } from '@prisma/client';

@Injectable()
export class ArtistsService {
  // create(createArtistDto: Prisma.ArtistCreateInput) {
  //   return this.prisma.artist.create({
  //     data: createArtistDto,
  //   });
  // }
  create(createArtistDto: CreateArtistDto) {
    console.log(createArtistDto);
    return 'This action adds a new artist';
  }

  findAll() {
    return `This action returns all artists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artist`;
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    console.log(updateArtistDto);
    return `This action updates a #${id} artist`;
  }

  remove(id: number) {
    return `This action removes a #${id} artist`;
  }
}
