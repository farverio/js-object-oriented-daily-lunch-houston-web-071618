// global datastore
let store = { 
  neighborhoods: [], 
  meals: [], 
  customers: [], 
  deliveries: [],
  ids: {
    neighborhood: 0, 
    meal: 0, 
    customer: 0,
    delivery: 0
  },
};

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = ++store.ids.neighborhood
    store.neighborhoods.push(this)
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => delivery.neighborhood === this)
  }
  
  customers() {
    return store.customers.filter(customer => customer.neighborhoodId === this.id)
  }
  
  meals() {
    return [...new Set(this.deliveries.map(delivery => delivery.meal))]
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.neighborhoodId = neighborhoodId
    this.id = ++store.ids.customer
    store.customers.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => delivery.customer === this)
  }

  meals() {
    return [...new Set(this.deliveries.map(delivery => delivery.meal))]
  }  

  totalSpent() {
    return this.deliveries.reduce((acc, meal) => acc += meal.price, 0)
  }
}

class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price
    this.id = ++store.ids.meal
    store.meals.push(this)
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => deliver.meal === this)
  }
  
  customers() {
    return [...new Set(this.deliveries.map(delivery => delivery.customer))]
  }
  
  static byPrice() {
    return store.meals.sort((a, b) => b - a)
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId
    this.neighborhoodId = neighborhoodId
    this.customerId = customerId
    this.id = ++store.ids.delivery
    store.deliveries.push(this)
  }
  
  meal() {
    return store.meals.find(meal => meal.id === this.mealId)
  }
  
  customer() {
    return store.customers.find(customer => customer.id === this.customerId)
  }
  
  neighborhood() {
    return store.neighborhoods.find(neighborhood => neighborhood.id === this.neighborhoodId)
  }
}

  