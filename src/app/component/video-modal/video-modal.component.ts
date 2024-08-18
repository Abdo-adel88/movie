import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent {
  @Input() videoKey: string | null = null;

  get youtubeUrl(): string {
    return `https://www.youtube.com/embed/${this.videoKey}`;
  }

  closeModal(): void {
    this.videoKey = null;
  }
}
