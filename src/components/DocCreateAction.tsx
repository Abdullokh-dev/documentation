import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import dateFormat from '../assets/ts/date-format';
import ContractModel from '../models/contract';
import UserModel from "../models/user";

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

export function MigrationPrinter(migration: UserModel) {
  if(migration.surname && migration.name && migration.additionalName && migration.citizenship_country
      && migration.birthday && migration.gender && migration.city && migration.docType && migration.docSeriesNum
      && migration.docDateOfIssue && migration.docDateOfExpiry && migration.rightToStay && migration.purposeOfComing
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
      const profession = mapToUpperCase(migration.profession);

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
        case 'Служебная':
          official = 'V'
          break;
        case 'Туризм':
          tourism = 'V'
          break;
        case 'Деловая':
          business = 'V'
          break;
        case 'Учеба':
          studies = 'V'
          break;
        case 'Работа':
          job = 'V'
          break;
        case 'Частная':
          own = 'V'
          break;
        case 'Транзит':
          transit = 'V'
          break;
        case 'Гуманитарная':
          humanitarian = 'V'
          break;
        case 'Иная':
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
        // Gender = F
        f: male, f1: female,
        // City = G
        g: city[0], g1: city[1], g2: city[2], g3: city[3], g4: city[4], g5: city[5], g6: city[6], g7: city[7], g8: city[8], g9: city[9], g10: city[10], g11: city[11], g12: city[12], g13: city[13], g14: city[14], g15: city[15], g16: city[16], g17: city[17], g18: city[18], g19: city[19], g20: city[20], g21: city[21], g22: city[22], g23: city[23], g24: city[24], g25: city[25], g26: city[26], g27: city[27], g28: city[28], g29: city[29], g30: city[30], g31: city[31], g32: city[32], g33: city[33], g34: city[34], g35: city[35], g36: city[36], g37: city[37], g38: city[38], g39: city[39], g40: city[40], g41: city[41], g42: city[42], g43: city[43], g44: city[44], g45: city[45], g46: city[46], g47: city[47],
        // Doc Type = H
        h: docType[0], h1: docType[1], h2: docType[2], h3: docType[3], h4: docType[4], h5: docType[5], h6: docType[6], h7: docType[7], h8: docType[8], h9: docType[9],
        // Doc Series/Number = I
        i: docSeriesNum[0], i1: docSeriesNum[1], i2: docSeriesNum[2], i3: docSeriesNum[3], i4: docSeriesNum[4], i5: docSeriesNum[5], i6: docSeriesNum[6], i7: docSeriesNum[7], i8: docSeriesNum[8], i9: docSeriesNum[9], i10: docSeriesNum[10],
        // Doc Given Date = J => YYYY-MM-DD
        j: migration.docDateOfIssue[8], j1: migration.docDateOfIssue[9], j2: migration.docDateOfIssue[5], j3: migration.docDateOfIssue[6], j4: migration.docDateOfIssue[0], j5: migration.docDateOfIssue[1], j6: migration.docDateOfIssue[2], j7: migration.docDateOfIssue[3],
        // Doc Expiry Date = K => YYY-MM-DD
        k: migration.docDateOfExpiry[8], k1: migration.docDateOfExpiry[9], k2: migration.docDateOfExpiry[5], k3: migration.docDateOfExpiry[6], k4: migration.docDateOfExpiry[0], k5: migration.docDateOfExpiry[1], k6: migration.docDateOfExpiry[2], k7: migration.docDateOfExpiry[3],
        // Right To Stay = L
        l: vnj, l1:rvp,
        // Ru Doc Series = M
        m: ruDocSeries[0], m1: ruDocSeries[1], m2: ruDocSeries[2], m3: ruDocSeries[3],
        // Ru Doc Number = N
        n: migration.ruDocNum[0], n1: migration.ruDocNum[1], n2: migration.ruDocNum[2], n3: migration.ruDocNum[3], n4: migration.ruDocNum[4], n5: migration.ruDocNum[5], n6: migration.ruDocNum[6], n7: migration.ruDocNum[7], n8: migration.ruDocNum[8], n9: migration.ruDocNum[9], n10: migration.ruDocNum[10], n11: migration.ruDocNum[11], n12: migration.ruDocNum[12], n13: migration.ruDocNum[13], n14: migration.ruDocNum[14],
        // Ru Doc Given Date = O => YYYY-MM-DD
        o: migration.ruDocDateOfIssue[8], o1: migration.ruDocDateOfIssue[9], o2: migration.ruDocDateOfIssue[5], o3: migration.ruDocDateOfIssue[6], o4: migration.ruDocDateOfIssue[0], o5: migration.ruDocDateOfIssue[1], o6: migration.ruDocDateOfIssue[2], o7: migration.ruDocDateOfIssue[3],
        // Ru Doc Expiry Date = P YYY-MM-DD
        p: migration.ruDocDateOfExpiry[8], p1: migration.ruDocDateOfExpiry[9], p2: migration.ruDocDateOfExpiry[5], p3: migration.ruDocDateOfExpiry[6], p4: migration.ruDocDateOfExpiry[0], p5: migration.ruDocDateOfExpiry[1], p6: migration.ruDocDateOfExpiry[2], p7: migration.ruDocDateOfExpiry[3],
        // Purpose of coming = Q
        q: official, q1: tourism, q2: business, q3: studies, q4: job, q5: own, q6: transit, q7: humanitarian, q8: other,
        // Profession = R
        r: profession[0], r1: profession[1], r2: profession[2], r3: profession[3], r4: profession[4], r5: profession[5], r6: profession[6], r7: profession[7], r8: profession[8], r9: profession[9], r10: profession[10], r11: profession[11], r12: profession[12], r13: profession[13], r14: profession[14], r15: profession[15], r16: profession[16], r17: profession[17], r18: profession[18], r19: profession[19], r20: profession[20], r21: profession[21], r22: profession[22], r23: profession[23], r24: profession[24], r25: profession[25],
        // dateOfEntryToRu = S
        s: migration.dateOfEntryToRu[8], s1: migration.dateOfEntryToRu[9], s2: migration.dateOfEntryToRu[5], s3: migration.dateOfEntryToRu[6], s4: migration.dateOfEntryToRu[0], s5: migration.dateOfEntryToRu[1], s6: migration.dateOfEntryToRu[2], s7: migration.dateOfEntryToRu[3],
        // deadlineLiveInRu = T
        t: migration.deadlineLiveInRu[8], t1: migration.deadlineLiveInRu[9], t2: migration.deadlineLiveInRu[5], t3: migration.deadlineLiveInRu[6], t4: migration.deadlineLiveInRu[0], t5: migration.deadlineLiveInRu[1], t6: migration.deadlineLiveInRu[2], t7: migration.deadlineLiveInRu[3],
        // Migration card series = U
        u: migCardSeries[0], u1: migCardSeries[1], u2: migCardSeries[2], u3: migCardSeries[3],
        // Migration card number = V
        v: migCardNum[0], v1: migCardNum[1], v2: migCardNum[2], v3: migCardNum[3], v4: migCardNum[4], v5: migCardNum[5], v6: migCardNum[6], v7: migCardNum[7], v8: migCardNum[8], v9: migCardNum[9], v10: migCardNum[10],
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
