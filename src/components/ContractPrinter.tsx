import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import dateFormat from "../assets/ts/date-format";

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

function ContractPrinter(contract) {
  if(contract.surname && contract.name && contract.additionalName && contract.from && contract.to && contract.price) {
    const fileType = `/${contract.address}.docx`;
    const fileName = contract.address + contract.surname + ' ' + contract.name + ' ' + contract.additionalName

    loadFile(fileType, function (error, content) {
      if (error) {
        alert('File did not found!');
        throw error;
      }
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      doc.render({
        date: dateFormat(contract.from, 'dd.MM.yyyy'),
        renter: `${contract.surname} ${ contract.name } ${ contract.additionalName }`,
        upToDate: dateFormat(contract.to, 'dd.MM.yyyy'),
        price: contract.price,
      });

      const blob = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      //Output the document using Data-URI
      saveAs(blob, fileName);
      }
    )
  } else {
    alert('Enter the details completely!')
  }
}

export function MigrationPrinter(migration) {
  if(migration.name) {
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
        function nullGetter(part, scopeManager) {
          if (!part.module) {
            return "";
          }
          if (part.module === "rawxml") {
            return "";
          }
          return "";
        }

        const doc = new Docxtemplater(zip, {nullGetter: nullGetter, paragraphLoop: true, linebreaks: true});

        const surname = [];

        for (let i = 0; i < migration.name.length; i++) {
          surname.push(migration.name[i].toUpperCase())
        }

        doc.render({
          // 1 = Surname
          1: surname[0], 2: surname[1], 3: surname[2], 4: surname[3], 5: surname[4], 6: surname[5], 7: surname[6], 8: surname[7], 9: surname[8], 10: surname[9], 11: surname[10], 12: surname[11], 13: surname[12], 14: surname[13], 15: surname[14], 16: surname[15], 17: surname[16], 18: surname[17], 19: surname[18], 20: surname[19], 21: surname[20], 22: surname[21], 23: surname[22], 24: surname[23], 25: surname[24], 26: surname[25],
        });

        const blob = doc.getZip().generate({type: "blob", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",});

        //Output the document using Data-URI
        saveAs(blob, fileName);
      }
    )
  } else {
    alert('Enter the details completely!')
  }
}

export default ContractPrinter
