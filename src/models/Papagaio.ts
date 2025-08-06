// src/models/Papagaio.ts
import { Animal } from './Animal';

export class Papagaio extends Animal {
  emitirSom(): string {
    return 'Olá! Eu sou um papagaio!';
  }
}