import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateManagerDto {
  @ApiProperty({
    example: 'Comm Manager',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: '9874561230',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'test@mailinator.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '0x00',
  })
  @IsString()
  walletAddress: string;

  @IsString()
  communities: string;
}
