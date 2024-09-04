import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  isListInStorage(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
  // Save the list of objects to localStorage
  saveList(key: string, list: any[]): void {
    if(!this.isListInStorage(key)){
    localStorage.setItem(key, JSON.stringify(list));
    }
  }

  // Retrieve the list of objects from localStorage
  getList(key: string): any[] {
    const list = localStorage.getItem(key);
    return list ? JSON.parse(list) : [];
  }

  // Update an object in the list
  updateObjectInList(key: string, id: any, newValue: any): void {
    const list = this.getList(key);
    const updatedList = list.map(obj => obj.id === id ? { ...obj, value: newValue } : obj);
    this.saveList(key, updatedList);
  }

  // Delete an object from the list
  deleteObjectFromList(key: string, id: any): void {
    const list = this.getList(key);
    const updatedList = list.filter(obj => obj.id !== id);
    this.saveList(key, updatedList);
  }

  // Clear the list from localStorage
  clearList(key: string): void {
    localStorage.removeItem(key);
  }
}
