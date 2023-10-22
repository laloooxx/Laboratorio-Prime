export const CustomerService = {
    getCustomersMedium() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1001,
              name: 'John Smith',
              country: {
                name: 'United States',
                code: 'us'
              },
              company: 'ABC Corporation',
              date: '2020-12-15',
              status: 'qualified',
              verified: true,
              activity: 25,
              representative: {
                name: 'Emily Johnson',
                image: 'emilyjohnson.png'
              },
              balance: 85000
            },
            {
              id: 1002,
              name: 'Maria Garcia',
              country: {
                name: 'Spain',
                code: 'es'
              },
              company: 'Garcia & Co.',
              date: '2021-03-25',
              status: 'new',
              verified: false,
              activity: 12,
              representative: {
                name: 'Daniel Martin',
                image: 'danielmartin.png'
              },
              balance: 42000
            },
            {
              id: 1003,
              name: 'Sophie Williams',
              country: {
                name: 'United Kingdom',
                code: 'gb'
              },
              company: 'Williams Ltd.',
              date: '2019-08-02',
              status: 'unqualified',
              verified: true,
              activity: 18,
              representative: {
                name: 'Michael Brown',
                image: 'michaelbrown.png'
              },
              balance: 56000
            },
            {
              id: 1004,
              name: 'Andrea Kim',
              country: {
                name: 'South Korea',
                code: 'kr'
              },
              company: 'Kim Enterprises',
              date: '2022-05-10',
              status: 'qualified',
              verified: true,
              activity: 30,
              representative: {
                name: 'Jung Lee',
                image: 'junglee.png'
              },
              balance: 72000
            }
            // Puedes agregar más datos siguiendo el mismo formato
          ]);
        }, 1000);
      });
    }
  };
  