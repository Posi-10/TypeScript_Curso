(() => {

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress( id: string ): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Miguel',
    age: 24,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Mexico'
    },
    getFullAddress( ) {
      return this.address.city
    }
  }

  const client2: Client = {
    name: 'Angel',
    age: 24,
    address: {
      city: 'Toronto',
      id: 120,
      zip: 'K2A U2A'
    },
    getFullAddress( ) {
      return this.address.city
    }
  }

})();