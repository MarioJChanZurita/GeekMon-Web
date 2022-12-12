import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  geekMonApi: string = environment.geekMonApi;

  constructor(private http: HttpClient) {}

  /**
   * Envia mensaje en el foro
   * @returns {Observable} Retorna observable con el mensaje enviado
   */
  sendMessage(userId: string, message: string): Observable<any> {
    return this.http.post<any>(`${this.geekMonApi}/message`, {
      userId,
      message,
    });
  }

  /**
   * Obtiene todos los mensajes del foro
   * @returns {Observable} Retorna observable con todos los mensajes
   */
  getMessages(): Observable<any> {
    return this.http.get<any>(`${this.geekMonApi}/message`);
  }

  /**
   * Editar mensaje previamente enviado
   * @returns {Observable} Retorna mensaje actualizado
   */
  editMessage(id: string, content: string): Observable<any> {
    return this.http.put<any>(`${this.geekMonApi}/message`, { id, content });
  }

  /**
   * Eliminar mensaje
   * @returns {Observable} Retorna mensaje elininado
   */
  deleteMessage(id: string): Observable<any> {
    return this.http.delete<any>(`${this.geekMonApi}/message/${id}`);
  }
}
