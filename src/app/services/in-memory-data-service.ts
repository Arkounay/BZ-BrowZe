import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  /**
   * Simulates an API call
   */
  createDb() {
    const servers = {
      'GET': [{
        'v': '2.0.131',
        'gtm': 42,
        'g': 'L7WzRTJ@mX',
        'k': 1,
        'm': 'MPIchill',
        'mu': '',
        'h': 'Test description',
        'gt': 2,
        'gtd': 13,
        'pg': 33,
        'pgm': 750,
        'd': 'nrI7n',
        't': 3,
        'n': 'RWFnbGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
        'mm': '0',
        'pm': 4,
        'pl': [{
          'i': 'S76561198006618270',
          'n': 'W0dHQ10gLjogTG9yZF9FYWdsZSA6Lg==',
          'k': 3,
          'd': 1,
          's': 18,
          't': 1
        }, {'i': 'S76561197971168713', 'n': 'U2F1Zmk=', 'k': 16, 'd': 8, 's': 83, 't': 2}],
        'tps': 20,
        'si': 3
      }, {
        'v': '2.0.131',
        'gtm': 0,
        'g': 'KYZXzf@@mh',
        'k': 1,
        'm': 'loot',
        'mu': '',
        'gt': 1,
        'gtd': 7,
        'pg': 0,
        'pgm': 750,
        'd': 'nrI7n',
        't': 3,
        'n': 'ZHJhZ29uABfxBDW/6dGIGPMENT+sl5oX8wQ1v+vRiBgEAAAACO2jAA==',
        'mm': '0',
        'h': 'q',
        'pm': 10,
        'pl': [{'i': 'S76561198007271642', 'n': 'RHJhZ29uIEh1bnRlcg==', 't': 1}],
        'tps': 20,
        'si': 3
      }, {
        'v': '2.0.131',
        'gtm': 6,
        'l': 1,
        'g': 'pKfFKg2@@P',
        'm': 'river',
        'mu': '',
        'gt': 2,
        'gtd': 12,
        'pg': 38,
        'pgm': 750,
        'd': 'nrI7n',
        't': 1,
        'n': 'SG9zdCAwY3ViZQBukPc6FbgdBha55dRuAwAAAAAAAABM1Z8Lchy1AA==',
        'mm': '0',
        'pm': 4,
        'pl': [{'i': 'S76561198004701048', 'n': 'MGN1YmU=', 't': 1}, {
          'i': 'S76561197985612155',
          'n': 'UGF5cmljaw==',
          't': 6
        }, {'i': 'S76561198007832995', 'n': 'TWF0dGhld1tnYnJdIG9u', 't': 2}],
        'tps': 20,
        'si': 3
      }, {
        'v': '2.0.131',
        'gtm': 4,
        'g': 'cmF3k4@@@v',
        'm': 'vsrEgypt',
        'mu': '',
        'gt': 2,
        'gtd': 12,
        'pg': 195,
        'pgm': 750,
        'd': 'nrI7n',
        't': 3,
        'n': 'bmljZSB3YXJtIGhvc3QA+n8QkAB0B3sABAAAADtMKPoRAAAAWGj5DA==',
        'mm': '1325933293',
        'pm': 8,
        'pl': [{
          'i': 'S76561198079394192',
          'n': 'dWx0aW1hdEU=',
          'k': 5,
          's': 80,
          't': 6
        }, {'i': 'S76561198031731465', 'n': 'U2ViYXM=', 'k': 1, 's': -40, 't': 1}, {
          'i': 'S76561197994360413',
          'n': 'UmFtTWFu',
          'k': 2,
          'd': 1,
          't': 2
        }, {'i': 'S76561198055219939', 'n': 'd2hhdGV2ZXI=', 's': -40, 't': 7}, {
          'i': 'S76561198367807305',
          'n': 'e1pvRX1CYXJ0',
          'k': 2,
          's': 20,
          't': 4
        }, {'i': 'S76561198039512061', 'n': 'TmllbGsy', 's': -40, 't': 8}, {
          'i': 'S76561198177541785',
          'n': 'TmVtYW5qYV94RA==',
          'k': 2,
          's': 40,
          't': 5
        }, {'i': 'S76561197968824919', 'n': 'bWFzZQ==', 'k': 2, 's': 40, 't': 10}],
        'tps': 20,
        'si': 4
      }, {
        'v': '2.0.131',
        'gtm': 18,
        'g': '1rk8NN4@@B',
        'm': 'IcecoldMPIBZCC',
        'mu': '',
        'gt': 2,
        'gtd': 13,
        'pg': 118,
        'pgm': 750,
        'd': 'nrI7n',
        't': 2,
        'n': 'SG9zdCBBZWdlaXMAAAAAAAAAAAAAAAAAAAAAAAUAAABU7+4PAAAAAA==',
        'mm': '1329976523',
        'pm': 4,
        'pl': [{
          'i': 'S76561198054197675',
          'n': 'QWVnZWlz',
          'k': 5,
          'd': 1,
          's': 23,
          't': 1
        }, {
          'i': 'S76561197963848866',
          'n': 'U2Nyb29nZU1jS2lyaw==',
          'k': 14,
          'd': 1,
          's': 78,
          't': 3
        }, {'i': 'S76561198043271029', 'n': 'TWFudQ==', 't': 2}],
        'tps': 20,
        'si': 3
      }]
    };

    return {servers};
  }
}
