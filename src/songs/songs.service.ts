import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  create(createSongDto: Prisma.SongCreateInput) {
    return this.prisma.song.create({
      data: createSongDto,
    });
  }

  // findAll() {
  //   return `This action returns all songs`;
  // }
  findAll() {
    return this.prisma.song.findMany({
      include: { artist: true },
    });
  }

  findOne(id: number) {
    return this.prisma.song.findUnique({ where: { id } });
    // return `This action returns a #${id} song`;
  }

  update(
    where: Prisma.SongWhereUniqueInput,
    updateSongDto: Prisma.SongUpdateInput,
  ) {
    return this.prisma.song.update({
      where,
      data: updateSongDto,
    });
  }

  remove(where: Prisma.SongWhereUniqueInput) {
    return this.prisma.song.delete({ where });
  }
}
