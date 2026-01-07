import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService, Room } from '../services/room';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-list.html',
  styleUrl: './room-list.scss',
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [];
  selectedType = '';

  selectedRoom: Room | null = null;
  showModal = false;

  guestName = '';
  checkInDate = '';
  checkOutDate = '';

  toastMessage = '';
  toastType: 'success' | 'danger' = 'success';
  showToastMsg = false;

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }

  filteredRooms() {
    if (!this.selectedType) return this.rooms;
    return this.rooms.filter(room => room.type === this.selectedType);
  }

  openModal(room: Room) {
    this.selectedRoom = room;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.guestName = '';
    this.checkInDate = '';
    this.checkOutDate = '';
  }

  showToast(message: string, type: 'success' | 'danger') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToastMsg = true;

    setTimeout(() => {
      this.showToastMsg = false;
    }, 3000);
  }

  confirmBooking() {
    if (!this.selectedRoom) return;

    if (!this.guestName || !this.checkInDate || !this.checkOutDate) {
      this.showToast('Please fill in all fields', 'danger');
      return;
    }

    if (this.checkOutDate <= this.checkInDate) {
      this.showToast('Check-out date must be after check-in date', 'danger');
      return;
    }

    this.selectedRoom.isBooked = true;
    this.roomService.saveRooms(this.rooms);

    this.showToast(
      `Room ${this.selectedRoom.name} booked successfully`,
      'success'
    );

    this.closeModal();
  }
}
