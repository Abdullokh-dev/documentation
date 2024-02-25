import {useState} from "react";

const districts = ["Свердлова 88", "Карла Либкнехта 49/11", "Проспект Октября 57А"];
const countries = ["Узбекистан", "Таджикистан", "Кыргызстан", "Армения", "Азербайджан"];
const cities = ["Ташкентская область", "Самаркандская область", "Бухарская область", "Ферганская область", "Андижанская область", "Наманганская область","Навоийская область", "Хорезмская область", "Сырдарьинская область", "Кашкадарьинская область", "Сурхандарьинская область", "Джизакская область", "Каракалпакстан"];
const purposes = ["Служебная", "Работа", "Частная", "Учеба", "Транзит", "Туризм", "Деловая", "Гуманитарная", "Иная"];
const professions = ["Подсобный рабочий", "Мастер", "Мастер строительных работ", "Мастер строительных и монтажны", "Штукатур", "Повар", "Швея", "Упаковщик", "Уборщица служебных помещений", "Уборщик производственных и слу", "Слесарь-ремонтник", "Продавец продовольственных тов", "Прессовщик", "Плотник", "Плавильщик металла и сплавов", "Пекарь", "Монтажник", "Мойщик посуды", "Курьер", "Кондитер", "Каменщик", "Изолировщик", "Изготовитель полуфабрикатов из", "Грузчик", "Водитель автомобиля", "Бетонщик", "Арматурщик", "Комплектовщик"];

interface Props {
  onCreate: (user) => void;
}

function UserModal({onCreate}: Props) {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    additionalName: '',
    birthday: '',
    gender: '',
    placeOfStay: '',
    citizenship_country: '',
    city: '',
    docType: 'Паспорт',
    docSeriesNum: '',
    docDateOfIssue: '',
    docDateOfExpiry: '',
    rightToStay: 'Другое',
    ruDocSeries: '',
    ruDocNum: '',
    ruDocDateOfIssue: '',
    ruDocDateOfExpiry: '',
    migCardSeries: '',
    migCardNum: '',
    purposeOfComing: '',
    profession: '',
    dateOfEntryToRu: '',
    deadlineLiveInRu: ''
  });

  const createUser = (user) => {
    const form = document.getElementById('addUserForm');
    if (form.checkValidity()) {
      onCreate(user);
      document.getElementById('modalClose').click();
    } else {
      form.reportValidity();
    }
  }

  return (
    <div className="modal fade modal-xl" id="userEditModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header py-0">
            <h1 className="modal-title fs-5 py-2">Add User</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body">
            <form id="addUserForm">
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-6 text-center">
                  <label className="form-label" htmlFor="district">Место пребывания</label>
                  <input className="form-control" type="text" name="district" id="district" list="districts-list" required />

                  <datalist id="districts-list">
                    {districts.map(d => <option key={d}>{d}</option>)}
                  </datalist>
                </div>
              </div>

              <div className="row">
                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label">Фамилия</label>
                  <input value={user.surname} onChange={(e) => setUser({...user, surname: e.target.value}) } className="form-control" type="text" required />
                </div>

                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label">Имя</label>
                  <input value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} className="form-control" type="text" required />
                </div>

                <div className="my-1 col-12 col-lg-4">
                  <label className="form-label">Отчество</label>
                  <input value={user.additionalName} onChange={(e) => setUser({...user, additionalName: e.target.value})} className="form-control" type="text" required />
                </div>

                <div className="my-1 col-12 col-lg-2">
                  <label className="form-label">Пол</label>

                  <select value={user.gender} onChange={(e) => setUser({...user, gender: e.target.value})} className="form-select" required>
                    <option value="">Пол</option>
                    <option value="М">М</option>
                    <option value="Ж">Ж</option>
                  </select>
                </div>

                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label">гражданство</label>
                  <input value={user.citizenship_country} onChange={(e) => setUser({...user, citizenship_country: e.target.value})} className="form-control" type="text" name="country" id="form-country" list="countries-list" required />

                  <datalist id="countries-list">
                    {countries.map(c => <option key={c}>{c}</option>)}
                  </datalist>
                </div>

                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label">день рождения</label>
                  <input value={user.birthday} onChange={(e) => setUser({...user, birthday: e.target.value})} className="form-control" type="date" max="2050-12-31" required />
                </div>

                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label">страна</label>
                  <input value={user.citizenship_country} onChange={(e) => setUser({...user, citizenship_country: e.target.value})} className="form-control" type="text" id="form-country" list="countries-list" required />

                  <datalist id="countries-list">
                    {countries.map(c => <option key={c}>{c}</option>)}
                  </datalist>
                </div>

                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label">город</label>
                  <input value={user.city} onChange={(e) => setUser({...user, city: e.target.value})} className="form-control" type="text" id="form-city" list="cities-list" required />

                  <datalist id="cities-list">
                    {cities.map(c => <option key={c}>{c}</option>)}
                  </datalist>
                </div>

                <div className="my-1 col-6 col-lg-3">
                  <label className="form-label">Вид документа</label>
                  <select className="form-select" required>
                    <option value="Паспорт">Паспорт</option>
                  </select>
                </div>

                <div className="my-1 col-6 col-lg-3">
                  <label className="form-label">номер док</label>
                  <input value={user.docSeriesNum} onChange={(e) => setUser({...user, docSeriesNum: e.target.value})} className="form-control" type="text" required />
                </div>

                <div className="my-1 col-6 col-lg-3">
                  <label className="form-label">Date of issue</label>
                  <input value={user.docDateOfIssue} onChange={(e) => setUser({...user, docDateOfIssue: e.target.value})} className="form-control" type="date" max="2050-12-31" required />
                </div>

                <div className="my-1 col-6 col-lg-3">
                  <label className="form-label">Date of expiry</label>
                  <input value={user.docDateOfExpiry} onChange={(e) => setUser({...user, docDateOfExpiry: e.target.value})} className="form-control" type="date" max="2050-12-31" required />
                </div>

                <div className="my-1 col-12 col-lg-2">
                  <label className="form-label">Док. на право</label>
                  <select value={user.rightToStay} onChange={(e) => setUser({...user, rightToStay: e.target.value})} className="form-select" required>
                    <option value="Другое" selected>Другое</option>
                    <option value="РВП">РВП</option>
                    <option value="ВНЖ">ВНЖ</option>
                  </select>
                </div>

                <div className="col-12">
                  <div className="row">
                    {user.rightToStay !== 'Другое' &&
                    <div className="my-1 col-6 col-lg-3">
                        <label className="form-label">Сер</label>
                        <input value={user.ruDocSeries} onChange={(e) => setUser({...user, ruDocSeries: e.target.value})} className="form-control" placeholder="" type="text" />
                    </div>
                    }
                    {user.rightToStay !== 'Другое' &&
                    <div className="my-1 col-6 col-lg-3">
                        <label className="form-label">Номер док</label>
                        <input value={user.ruDocNum} onChange={(e) => setUser({...user, ruDocNum: e.target.value})} className="form-control" type="text" />
                    </div>
                    }
                    {user.rightToStay !== 'Другое' &&
                    <div className="my-1 col-6 col-lg-3">
                        <label className="form-label">Given Date</label>
                        <input value={user.ruDocDateOfIssue} onChange={(e) => setUser({...user, ruDocDateOfIssue: e.target.value})} className="form-control" type="date" max="2050-12-31" />
                    </div>
                    }
                    {user.rightToStay !== 'Другое' &&
                    <div className="my-1 col-6 col-lg-3">
                        <label className="form-label">Date of Expiry</label>
                        <input value={user.ruDocDateOfExpiry} onChange={(e) => setUser({...user, ruDocDateOfExpiry: e.target.value})} className="form-control" type="date" max="2050-12-31" />
                    </div>
                    }
                  </div>
                </div>

                <div className="my-1 col-6">
                  <label className="form-label">Серия миграционной карты</label>
                  <input value={user.migCardSeries} onChange={(e) => setUser({...user, migCardSeries: e.target.value})} className="form-control" type="text" required />
                </div>

                <div className="my-1 col-6">
                  <label className="form-label">Номер миграционной карты</label>
                  <input value={user.migCardNum} onChange={(e) => setUser({...user, migCardNum: e.target.value})} className="form-control" type="text" required />
                </div>

                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label" htmlFor="form-purpose">Цель въезда в РФ</label>
                  <input value={user.purposeOfComing} onChange={(e) => setUser({...user, purposeOfComing: e.target.value})} className="form-control" type="text" name="purpose" id="form-purpose" list="purposes-list" required />

                  <datalist id="purposes-list">
                    {purposes.map(p => <option key={p}>{p}</option>)}
                  </datalist>
                </div>

                <div className="my-1 col-12 col-lg-3">
                  <label className="form-label" htmlFor="form-profession">профессия</label>
                  <input value={user.profession} onChange={(e) => setUser({...user, profession: e.target.value})} className="form-control" type="text" id="form-profession" list="professions-list" required />

                  <datalist id="professions-list">
                    {professions.map(p => <option key={p}> {p} </option>)}
                  </datalist>
                </div>

                <div className="my-1 col-6 col-lg-3">
                  <label className="form-label">Дата въезда в РФ</label>
                  <input value={user.dateOfEntryToRu} onChange={(e) => setUser({...user, dateOfEntryToRu: e.target.value})} className="form-control" type="date" max="2050-12-31" required />
                </div>

                <div className="my-1 col-6 col-lg-3">
                  <label className="form-label">Срок пребывания до</label>
                  <input value={user.deadlineLiveInRu} onChange={(e) => setUser({...user, deadlineLiveInRu: e.target.value})} className="form-control" type="date" max="2050-12-31" required />
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button id="modalClose" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={() => createUser(user)} type="submit" className="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserModal;