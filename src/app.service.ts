import { HttpException, Injectable } from '@nestjs/common';
import { Location } from './interfaces/location.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// ● Create new location
// ● Edit Location
// ● Delete Location
// ● Fetch All Locations
// ● Fetch Specific Location
// ● Calculate distance

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Location') private readonly locationModel: Model<Location>,
  ) {}

  async createNewLocation(location: Location): Promise<any> {
    const newLocation = {
      locationName: location.locationName,
      website: location.website,
      description: location.description,
      phone: location.phone,
      person: location.person,
      coordinates: {
        x: location.coordinateX,
        y: location.coordinateY,
      },
    };
    const data = new this.locationModel(newLocation);
    try {
      const res = await data.save();
      if (res === null) {
        return {
          statusCode: 200,
          message: {},
        };
      }
      return {
        statusCode: 200,
        message: res,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, 400);
    }
  }

  async deleteLocation(locationName: string): Promise<any> {
    try {
      await this.locationModel.deleteOne({ locationName });
      return {
        statusCode: 200,
        message: `${locationName} is deleted`,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, 400);
    }
  }

  async editLocation(location: any, locationName: string): Promise<any> {
    try {
      const doc = await this.locationModel.findOne({ locationName });
      if (doc === null) {
        return {
          statusCode: 200,
          message: {},
        };
      }
      doc.locationName = location['locationName'];
      doc.website = location['website'];
      doc.description = location['description'];
      doc.phone = location['phone'];
      doc.person = location['person'];
      doc['coordinates'].x = location['coordinateX'];
      doc['coordinates'].y = location['coordinateY'];
      const res = await doc.save();

      return {
        statusCode: 200,
        message: res,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, 400);
    }
  }

  async getAllLocations(): Promise<Location[]> {
    try {
      return await this.locationModel.find();
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, 400);
    }
  }

  async getALocation(locationName: string): Promise<any> {
    try {
      const res = await this.locationModel.findOne({ locationName });
      if (res === null) {
        return {
          statusCode: 200,
          message: {},
        };
      }
      return {
        statusCode: 200,
        message: res,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException('An Error Occured.', 400);
    }
  }

  async calculateDistance(locationName: string): Promise<any> {
    const res = await this.locationModel.findOne({ locationName });
    const X = res['coordinates'].x;
    const Y = res['coordinates'].y;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axios = require('axios').default;

    const options = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      params: { apikey: '873dbe322aea47f89dcf729dcc8f60e8' },
      headers: {
        'x-rapidapi-key': '88c775a3ffmsh368bff8cb938becp1b3edbjsn86436e6974f1',
        'x-rapidapi-host':
          'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    const lat = response.data.latitude;
    const long = response.data.longitude;
    // √[(x₂ - x₁)² + (y₂ - y₁)²]
    const distance = Math.sqrt((X - Y) ** 2 + (lat - long) ** 2);
    return {
      statusCode: 200,
      message: {
        distance: distance,
      },
    };
  }
}
