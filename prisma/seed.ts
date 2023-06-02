import { Gender, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create beneficiaries
  const beneficiary1 = await prisma.beneficiary.create({
    data: {
      gender: Gender.M,
      walletAddress: '0x1234567890',
      age: 25,
    },
  });

  const beneficiary2 = await prisma.beneficiary.create({
    data: {
      gender: Gender.F,
      walletAddress: '0x0987654321',
      age: 30,
    },
  });

  console.log('Beneficiaries created:', beneficiary1, beneficiary2);

  // Create donors
  const donor1 = await prisma.donor.create({
    data: {
      walletAddress: '0X537GNJUDfdhyT6IHG8gHY576DDFDD57KKxwet57',
    },
  });

  const donor2 = await prisma.donor.create({
    data: {
      walletAddress: '0X537GNJUDfdhyr78gHY576DDFDD57567',
    },
  });

  console.log('Donors created:', donor1, donor2);

  const category1 = await prisma.category.create({
    data: {
      name: 'category 1',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'category 2',
    },
  });

  // Create community types
  const communityType1 = await prisma.tags.create({
    data: {
      name: 'Community Type 1',
    },
  });

  const communityType2 = await prisma.tags.create({
    data: {
      name: 'Community Type 2',
    },
  });

  console.log('Community types created:', communityType1, communityType2);

  // Create communities
  const community1 = await prisma.community.create({
    data: {
      name: 'Rahat Jaleshwor',
      manager: 'Manager Rahat',
      description: 'Rahat Jaleshwor is a community in Nepal',
      longitude: '27.1700',
      latitude: '86.9833',
      logo: '',
      cover: '',
      country: 'Napal',
      categoryId: category2.id,
      totalDonationsUsd: '$ 1500',
      tags: {
        connect: [
          {
            id: communityType1.id,
          },
        ],
      },
    },
  });

  const community2 = await prisma.community.create({
    data: {
      name: 'Community 2',
      description: 'Description of Community 2',
      longitude: '0.0000',
      latitude: '0.0000',
      logo: '',
      manager: 'Manager',
      cover: '',
      country: 'Nefol',
      categoryId: category1.id,
      totalDonationsUsd: '$ 1500',
      tags: {
        connect: [
          {
            id: communityType1.id,
          },
          {
            id: communityType2.id,
          },
        ],
      },
    },
  });

  console.log('Communities created:', community1, community2);

  // Create community reports
  const communityReport1 = await prisma.demographics.create({
    data: {
      communityId: community1.id,
      internet_no: '20',
      internet_yes: '20',
      total_beneficiaries: '222',
      bank_no: '200',
      bank_yes: '22',
      gender_male: '5',
      extra: {
        key: 'value',
      },
      gender_female: '56',
      gender_other: '4',
    },
  });

  const communityReport2 = await prisma.demographics.create({
    data: {
      communityId: community2.id,
      internet_no: '20',
      internet_yes: '20',
      total_beneficiaries: '222',
      bank_no: '200',
      bank_yes: '22',
      gender_male: '5',
      extra: {
        key: 'value',
      },
      gender_female: '56',
      gender_other: '4',
    },
  });

  console.log('Community reports created:', communityReport1, communityReport2);

  // Create donation transactions
  const donation1 = await prisma.transactions.create({
    data: {
      timestamp: new Date(),
      donorId: donor1.id,
      doneeId: community1.id,
      txnHash: 'transaction-hash-1',
      amount: 100,
    },
  });

  const donation2 = await prisma.transactions.create({
    data: {
      timestamp: new Date(),
      donorId: donor1.id,
      doneeId: community1.id,
      txnHash: 'transaction-hash-2',
      amount: 500,
    },
  });

  console.log('Donation transactions created:', donation1, donation2);

  // Create projects
  // const project1 = await prisma.project.create({
  //   data: {
  //     name: 'Project 1',
  //     description: 'Description of Project 1',
  //     manager: 'Project Manager 1',
  //     communities: { connect: [{ id: community1.id }] },
  //   },
  // });

  // const project2 = await prisma.project.create({
  //   data: {
  //     name: 'Project 2',
  //     description: 'Description of Project 2',
  //     manager: 'Project Manager 2',
  //     communities: { connect: [{ id: community1.id }, { id: community2.id }] },
  //   },
  // });

  // console.log('Projects created:', project1, project2);

  // Create community transactions
  // const communityTransaction1 = await prisma.communityTransasction.create({
  //   data: {
  //     communityId: community1.id,
  //     txnHash: 'community-transaction-hash-1',
  //     txnDate: new Date(),
  //     status: TxnsStatus.SUCCESS,
  //   },
  // });

  // const communityTransaction2 = await prisma.communityTransasction.create({
  //   data: {
  //     communityId: community2.id,
  //     txnHash: 'community-transaction-hash-2',
  //     txnDate: new Date(),
  //     status: TxnsStatus.FAILED,
  //   },
  // });

  // console.log(
  //   'Community transactions created:',
  //   communityTransaction1,
  //   communityTransaction2,
  // );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
