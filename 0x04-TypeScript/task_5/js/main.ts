interface MajorCredits {
  credits: number;
  _brand: 'Major';
}

interface MinorCredits {
  credits: number;
  _brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number{
  return subject1.credits + subject2.credits
}

function sumMinorCredits(subject1: MajorCredits, subject2: MajorCredits): number{
  return subject1.credits + subject2.credits
}
