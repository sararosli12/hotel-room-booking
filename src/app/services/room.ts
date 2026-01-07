import { Injectable } from '@angular/core';

export interface Room {
  id: number;
  name: string;
  type: 'Single' | 'Double' | 'Suite';
  price: number;
  isBooked: boolean;
}

const STORAGE_KEY = 'rooms_data';

@Injectable({ providedIn: 'root' })
export class RoomService {

  private defaultRooms: Room[] = [
    {
      id: 1,
      name: 'Deluxe Single – City View',
      type: 'Single',
      price: 120,
      isBooked: false,
    },
    {
      id: 2,
      name: 'Premier Double – Garden View',
      type: 'Double',
      price: 180,
      isBooked: true,
    },
    {
      id: 3,
      name: 'Classic Single – Cozy Room',
      type: 'Single',
      price: 130,
      isBooked: false,
    },
    {
      id: 4,
      name: 'Executive Suite – Sea View',
      type: 'Suite',
      price: 280,
      isBooked: false,
    },
    {
      id: 5,
      name: 'Superior Double – Family Room',
      type: 'Double',
      price: 190,
      isBooked: false,
    },
  ];

  getRooms(): Room[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : this.defaultRooms;
  }

  saveRooms(rooms: Room[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
  }
}
