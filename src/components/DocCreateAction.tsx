import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import dateFormat from '../assets/ts/date-format';
import ContractModel from '../models/contract';
import MigrationModel from '../models/migration';

interface Part {
  module: string
}

function loadFile(url: string, callback: (error: Error, content: string) => void) {
  PizZipUtils.getBinaryContent(url, callback);
}

function DocCreateAction(contract: ContractModel) {
  if(contract.surname && contract.name && contract.additionalName && contract.from && contract.to && contract.price) {
    const fileType = `/${contract.address}.docx`;
    const fileName = contract.address + contract.surname + ' ' + contract.name + ' ' + contract.additionalName

    loadFile(fileType, function (error, content) {
      if (error) {
        alert('File did not found!');
        throw error;
      }
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {paragraphLoop: true, linebreaks: true,});

      doc.render({
        date: dateFormat(contract.from, 'dd.MM.yyyy'),
        renter: `${contract.surname} ${ contract.name } ${ contract.additionalName }`,
        upToDate: dateFormat(contract.to, 'dd.MM.yyyy'),
        price: contract.price,
      });

      const blob = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      //Output the document using Data-URI
      saveAs(blob, fileName);
      }
    )
  } else {
    alert('Enter the details completely!')
  }
}

export function MigrationPrinter(migration: MigrationModel) {
  if(migration.surname && migration.name && migration.additionalName && migration.citizenship_country
      && migration.birthday && migration.gender && migration.city && migration.docType && migration.docSeriesNum
      && migration.docDateOfIssue && migration.docDateOfExpiry && migration.rightToStay && migration.ruDocSeries
      && migration.ruDocNum && migration.ruDocDateOfIssue && migration.ruDocDateOfExpiry && migration.purposeOfComing
      && migration.migCardSeries && migration.migCardNum)
  {
    // let showWay;
    // switch (showWay) {
    //   case 'Свердлова 88':
    //     showWay = '/BlankS.docx'
    //     break;
    //   case 'Карла Либкнехта 49/11':
    //     showWay = '/blankK.docx'
    //     break;
    //   case 'Проспект Октября 57А':
    //     showWay = '/blankP.docx'
    //     break;
    // }

    const fileName = 'BlankS'

    loadFile("/BlankS.docx", function (error, content) {
      if (error) {alert('File did not found!');throw error;}

      const zip = new PizZip(content);
      function nullGetter(part: Part) {
        if (!part.module) {
          return "";
        }
        if (part.module === "rawxml") {
          return "";
        }
        return "";
      }

      const doc = new Docxtemplater(zip, {nullGetter: nullGetter, paragraphLoop: true, linebreaks: true});

      function mapToUpperCase(str: string) {
        return str.split('').map(char => char.toUpperCase());
      }

      // Create new arrays
      const surname = mapToUpperCase(migration.surname);
      const name = mapToUpperCase(migration.name);
      const additionalName = mapToUpperCase(migration.additionalName);
      const citizenship = mapToUpperCase(migration.citizenship_country);
      const city = mapToUpperCase(migration.city);
      const docType = mapToUpperCase(migration.docType);
      const docSeriesNum = mapToUpperCase(migration.docSeriesNum);
      const ruDocSeries = mapToUpperCase(migration.ruDocSeries);

      // Gender
      let male: string = "";
      let female: string = "";

      // RightToStay
      let vnj: string = "";
      let rvp: string = "";

      // PurposeOfComing
      let official: string = "";
      let tourism: string = "";
      let business: string = "";
      let studies: string = "";
      let job: string = "";
      let own: string = "";
      let transit: string = "";
      let humanitarian: string = "";
      let other: string = "";


      if (migration.gender === 'М') {
        male = "V";
      } else if(migration.gender === 'Ж') {
        female = "V";
      }

      if (migration.rightToStay === 'ВНЖ') {
        vnj = "V";
      } else if(migration.rightToStay === 'РВП') {
        rvp = "V";
      }

      switch (migration.purposeOfComing) {
        case 'служебная':
          official = 'V'
          break;
        case 'туризм':
          tourism = 'V'
          break;
        case 'деловая':
          business = 'V'
          break;
        case 'учеба':
          studies = 'V'
          break;
        case 'работа':
          job = 'V'
          break;
        case 'частная':
          own = 'V'
          break;
        case 'транзит':
          transit = 'V'
          break;
        case 'гуманитарная':
          humanitarian = 'V'
          break;
        case 'иная':
          other = 'V'
          break;
      }

      // Migration card series
      const migCardSeries = mapToUpperCase(migration.migCardSeries);

      // Migration card number
      const migCardNum = mapToUpperCase(migration.migCardNum);

      doc.render({
        // Surname = A
        a: surname[0], a1: surname[1], a2: surname[2], a3: surname[3], a4: surname[4], a5: surname[5], a6: surname[6], a7: surname[7], a8: surname[8], a9: surname[9], a10: surname[10], a11: surname[11], a12: surname[12], a13: surname[13], a14: surname[14], a15: surname[15], a16: surname[16], a17: surname[17], a18: surname[18], a19: surname[19], a20: surname[20], a21: surname[21], a22: surname[22], a23: surname[23], a24: surname[24], a25: surname[25], a26: surname[26],
        // Name = B
        b: name[0], b1: name[1], b2: name[2], b3: name[3], b4: name[4], b5: name[5], b6: name[6], b7: name[7], b8: name[8], b9: name[9], b10: name[10], b11: name[11], b12: name[12], b13: name[13], b14: name[14], b15: name[15], b16: name[16], b17: name[17], b18: name[18], b19: name[19], b20: name[20], b21: name[21], b22: name[22], b23: name[23], b24: name[24], b25: name[25], b26: name[26],
        // Additional Name = C
        c: additionalName[0], c1: additionalName[1], c2: additionalName[2], c3: additionalName[3], c4: additionalName[4], c5: additionalName[5], c6: additionalName[6], c7: additionalName[7], c8: additionalName[8], c9: additionalName[9], c10: additionalName[10], c11: additionalName[11], c12: additionalName[12], c13: additionalName[13], c14: additionalName[14], c15: additionalName[15], c16: additionalName[16], c17: additionalName[17], c18: additionalName[18], c19: additionalName[19], c20: additionalName[20], c21: additionalName[21], c22: additionalName[22], c23: additionalName[23],
        // Citizenship/Country = D
        d: citizenship[0], d1: citizenship[1], d2: citizenship[2], d3: citizenship[3], d4: citizenship[4], d5: citizenship[5], d6: citizenship[6], d7: citizenship[7], d8: citizenship[8], d9: citizenship[9], d10: citizenship[10], d11: citizenship[11], d12: citizenship[12], d13: citizenship[13], d14: citizenship[14], d15: citizenship[15], d16: citizenship[16], d17: citizenship[17], d18: citizenship[18], d19: citizenship[19], d20: citizenship[20], d21: citizenship[21], d22: citizenship[22], d23: citizenship[23], d24: citizenship[24],
        // Birthday = E => YYYY-MM-DD
        e: migration.birthday[8], e1: migration.birthday[9], e2: migration.birthday[5], e3: migration.birthday[6], e4: migration.birthday[0], e5: migration.birthday[1], e6: migration.birthday[2], e7: migration.birthday[3],
        // Gender = V
        v: male, v1: female,
        // City = F
        f: city[0], f1: city[1], f2: city[2], f3: city[3], f4: city[4], f5: city[5], f6: city[6], f7: city[7], f8: city[8], f9: city[9], f10: city[10], f11: city[11], f12: city[12], f13: city[13], f14: city[14], f15: city[15], f16: city[16], f17: city[17], f18: city[18], f19: city[19], f20: city[20], f21: city[21], f22: city[22], f23: city[23], f24: city[24], f25: city[25], f26: city[26], f27: city[27], f28: city[28], f29: city[29], f30: city[30], f31: city[31], f32: city[32], f33: city[33], f34: city[34], f35: city[35], f36: city[36], f37: city[37], f38: city[38], f39: city[39], f40: city[40], f41: city[41], f42: city[42], f43: city[43], f44: city[44], f45: city[45], f46: city[46], f47: city[47],
        // Doc Type = J
        j: docType[0], j1: docType[1], j2: docType[2], j3: docType[3], j4: docType[4], j5: docType[5], j6: docType[6], j7: docType[7], j8: docType[8], j9: docType[9],
        // Doc Series/Number
        h: docSeriesNum[0], h1: docSeriesNum[1], h2: docSeriesNum[2], h3: docSeriesNum[3], h4: docSeriesNum[4], h5: docSeriesNum[5], h6: docSeriesNum[6], h7: docSeriesNum[7], h8: docSeriesNum[8], h9: docSeriesNum[9], h10: docSeriesNum[10],
        // Doc Given Date = I => YYYY-MM-DD
        i: migration.docDateOfIssue[8], i1: migration.docDateOfIssue[9], i2: migration.docDateOfIssue[5], i3: migration.docDateOfIssue[6], i4: migration.docDateOfIssue[0], i5: migration.docDateOfIssue[1], i6: migration.docDateOfIssue[2], i7: migration.docDateOfIssue[3],
        // Doc Expiry Date = W => YYY-MM-DD
        w: migration.docDateOfExpiry[8], w1: migration.docDateOfExpiry[9], w2: migration.docDateOfExpiry[5], w3: migration.docDateOfExpiry[6], w4: migration.docDateOfExpiry[0], w5: migration.docDateOfExpiry[1], w6: migration.docDateOfExpiry[2], w7: migration.docDateOfExpiry[3],
        // Right To Stay = K
        k: vnj, k1:rvp,
        // Ru Doc Series = L
        l: ruDocSeries[0], l1: ruDocSeries[1], l2: ruDocSeries[2], l3: ruDocSeries[3],
        // Ru Doc Number = M
        m: migration.ruDocNum[0], m1: migration.ruDocNum[1], m2: migration.ruDocNum[2], m3: migration.ruDocNum[3], m4: migration.ruDocNum[4], m5: migration.ruDocNum[5], m6: migration.ruDocNum[6], m7: migration.ruDocNum[7], m8: migration.ruDocNum[8], m9: migration.ruDocNum[9], m10: migration.ruDocNum[10], m11: migration.ruDocNum[11], m12: migration.ruDocNum[12], m13: migration.ruDocNum[13], m14: migration.ruDocNum[14],
        // Ru Doc Given Date = N => YYYY-MM-DD
        n: migration.ruDocDateOfIssue[8], n1: migration.ruDocDateOfIssue[9], n2: migration.ruDocDateOfIssue[5], n3: migration.ruDocDateOfIssue[6], n4: migration.ruDocDateOfIssue[0], n5: migration.ruDocDateOfIssue[1], n6: migration.ruDocDateOfIssue[2], n7: migration.ruDocDateOfIssue[3],
        // Ru Doc Expiry Date = O YYY-MM-DD
        o: migration.ruDocDateOfExpiry[8], o1: migration.ruDocDateOfExpiry[9], o2: migration.ruDocDateOfExpiry[5], o3: migration.ruDocDateOfExpiry[6], o4: migration.ruDocDateOfExpiry[0], o5: migration.ruDocDateOfExpiry[1], o6: migration.ruDocDateOfExpiry[2], o7: migration.ruDocDateOfExpiry[3],
        // Purpose of coming
        p: official, p1: tourism, p2: business, p3: studies, p4: job, p5: own, p6: transit, p7: humanitarian, p8: other,
        // Migration card series
        q: migCardSeries[0], q1: migCardSeries[1], q2: migCardSeries[2], q3: migCardSeries[3],
        // Migration card number
        r: migCardNum[0], r1: migCardNum[1], r2: migCardNum[2], r3: migCardNum[3], r4: migCardNum[4], r5: migCardNum[5], r6: migCardNum[6], r7: migCardNum[7], r8: migCardNum[8], r9: migCardNum[9], r10: migCardNum[10],
      });

      const blob = doc.getZip().generate({type: "blob", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",});

      //Output the document using Data-URI
      saveAs(blob, fileName);
    })
  } else {
    alert('Enter the details completely!')
  }
}

export default DocCreateAction
