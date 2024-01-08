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
  if(migration.surname && migration.name && migration.additionalName) {
    // let showWay;
    // switch (showWay) {
    //   case 'Свердлова 88':
    //     showWay = '/blankS.docx'
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

      function fill(loop, val, from) {
        for (let i = 0; i < loop; i++) {
          val.push(from[i].toUpperCase())
        }
      }

      const surname = [];
      fill(migration.surname.length, surname, migration.surname);

      const name = [];
      fill(migration.name.length, name, migration.name);

      const additionalName = [];
      fill(migration.additionalName.length, additionalName, migration.additionalName);

      doc.render({
        // Surname = A
        a: surname[0], a1: surname[1], a2: surname[2], a3: surname[3], a4: surname[4], a5: surname[5], a6: surname[6], a7: surname[7], a8: surname[8], a9: surname[9], a10: surname[10], a11: surname[11], a12: surname[12], a13: surname[13], a14: surname[14], a15: surname[15], a16: surname[16], a17: surname[17], a18: surname[18], a19: surname[19], a20: surname[20], a21: surname[21], a22: surname[22], a23: surname[23], a24: surname[24], a25: surname[25], a26: surname[26],
        // Name = B
        b: name[0], b1: name[1], b2: name[2], b3: name[3], b4: name[4], b5: name[5], b6: name[6], b7: name[7], b8: name[8], b9: name[9], b10: name[10], b11: name[11], b12: name[12], b13: name[13], b14: name[14], b15: name[15], b16: name[16], b17: name[17], b18: name[18], b19: name[19], b20: name[20], b21: name[21], b22: name[22], b23: name[23], b24: name[24], b25: name[25], b26: name[26],
        // Additional Name = C
        c: additionalName[0], c1: additionalName[1], c2: additionalName[2], c3: additionalName[3], c4: additionalName[4], c5: additionalName[5], c6: additionalName[6], c7: additionalName[7], c8: additionalName[8], c9: additionalName[9], c10: additionalName[10], c11: additionalName[11], c12: additionalName[12], c13: additionalName[13], c14: additionalName[14], c15: additionalName[15], c16: additionalName[16], c17: additionalName[17], c18: additionalName[18], c19: additionalName[19], c20: additionalName[20], c21: additionalName[21], c22: additionalName[22], c23: additionalName[23],
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
