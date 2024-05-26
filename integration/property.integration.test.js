import axios from 'axios';
import { initializeWebServer } from '../utils/helpers';
import { propertyService } from '../services/propertyService';

describe('Property Integration Tests', () => {
  let axiosAPIClient;
  let expressApp;
  let connection;

  beforeAll(async () => {
    expressApp = await initializeWebServer();
    const axiosConfig = {
      baseURL: `http://127.0.0.1:${expressApp.port}`,
      validateStatus: () => true,
    };
    axiosAPIClient = axios.create(axiosConfig);
  });

  afterAll(async () => {
    await stopWebServer();
  });

  test('When asked for an existing property, Then should retrieve it and receive 200 response', async () => {
    const propertyToAdd = {
      title: 'Test Property',
      description: 'This is a test property',
      price: 1000000,
      location: 'Jakarta, Indonesia',
    };

    // Use axios to create a property
    const {
      data: { id: addedPropertyId },
    } = await axiosAPIClient.post(`/property`, propertyToAdd);

    // Use axios to retrieve the same property by id
    const getResponse = await axiosAPIClient.get(`/property/${addedPropertyId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.data.title).toBe('Test Property');
    expect(getResponse.data.description).toBe('This is a test property');
    expect(getResponse.data.price).toBe(1000000);
    expect(getResponse.data.location).toBe('Jakarta, Indonesia');
  });

  test('When asked for a non-existing property, Then should receive 404 response', async () => {
    const nonExistingPropertyId = 999;
    const getResponse = await axiosAPIClient.get(`/property/${nonExistingPropertyId}`);
    expect(getResponse.status).toBe(404);
  });
});
