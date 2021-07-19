import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from './interfaces/location.interface';

// ● Create new location
// ● Edit Location
// ● Delete Location
// ● Fetch All Locations
// ● Fetch Specific Location
// ● Calculate distance

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createNewLocation(
    @Body() createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    return this.appService.createNewLocation(createLocationDto);
  }

  @Put(':locationName')
  editLocation(
    @Body() editLocationDto: CreateLocationDto,
    @Param('locationName') locationName,
  ): Promise<any> {
    return this.appService.editLocation(editLocationDto, locationName);
  }

  @Delete(':locationName')
  deleteLocation(@Param('locationName') locationName): Promise<any> {
    return this.appService.deleteLocation(locationName);
  }

  @Get()
  getAllLocations(): Promise<any> {
    return this.appService.getAllLocations();
  }

  @Get(':location')
  getALocation(@Param('location') location: string): Promise<any> {
    return this.appService.getALocation(location);
  }

  @Post('/calculate/:location')
  calculateDistance(@Param('location') location: string) {
    return this.appService.calculateDistance(location);
  }
}
