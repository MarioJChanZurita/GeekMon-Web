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

  /* Message */
  sendMessage(userId: string, message: string): Observable<any> {
    return this.http.post<any>(`${this.geekMonApi}/message/`, {
      content: message,
      userId,
    });
  }

  getMessages(): Observable<any> {
    return this.http.get<any>(`${this.geekMonApi}/message/`);
  }

  editMessage(id: string, message: string): Observable<any> {
    return this.http.put<any>(`${this.geekMonApi}/message/${id}`, { message });
  }

  deleteMessage(id: string): Observable<any> {
    return this.http.delete<any>(`${this.geekMonApi}/message/${id}`);
  }
}
