import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateCommunityDto {
  @ApiProperty({
    type: 'string',
    example: 'Tayaba',
    description: 'Name Of Community',
  })
  @IsString()
  name: string;
  @ApiProperty({
    type: 'string',
    example: 'Tayaba',
    description: 'manager Of Community',
  })
  @IsString()
  manager: string;

  @ApiProperty({
    type: 'string',
    example: 'h20 Relief distribution',
    description: 'H20 relief distribution',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    type: 'string',
    example: '',
    description: 'Latitude of community',
    required: false,
  })
  @IsString()
  latitude?: string;

  @ApiProperty({
    type: 'string',
    example: '',
    description: 'Longitude of community',
    required: false,
  })
  @IsString()
  longitude?: string;

  @ApiProperty({
    type: 'string',
    example: 'Nepal',
    description: 'community Country',
    required: false,
  })
  @IsString()
  country: string;

  @ApiProperty({
    type: 'string',
    example: '$ 500',
    description: 'Budget of the community',
    required: false,
  })
  @IsString()
  totalDonationsUsd: string;

  @ApiProperty({
    type: 'string',
    example: 'http://image.png',
  })
  @IsString()
  logo?: string;

  @ApiProperty({
    type: 'array',
    example: ['http://image.png'],
  })
  @IsString()
  photos: [string];

  @ApiProperty({
    type: 'string',
    example: 'http://image.png',
  })
  @IsString()
  cover?: string;

  @ApiProperty({
    type: 'array',
    items: { type: 'number' },
    example: [1, 2],
    description: 'Tags IDs of the community',
    required: false,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  tags?: number[];

  @ApiProperty({})
  summary?: any;
}
