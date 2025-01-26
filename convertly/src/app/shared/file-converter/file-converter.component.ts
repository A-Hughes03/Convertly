import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-converter',
  templateUrl: './file-converter.component.html',
  styleUrls: ['./file-converter.component.css']
})
export class FileConverterComponent {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;
  
  selectedValue: string = '';
  isFileSelected: boolean = false;
  fileName:string = 'Click to select a file';

  imageTypes = [
    { value: '1', viewValue: 'PNG' },
    { value: '2', viewValue: 'JPG' },
    { value: '3', viewValue: 'JPEG' },
    { value: '4', viewValue: 'GIF' },
    { value: '5', viewValue: 'BMP' },
    { value: '6', viewValue: 'TIFF' }
  ];

  videoTypes = [
    { value: '1', viewValue: 'MP4' },
    { value: '2', viewValue: 'MOV' },
    { value: '3', viewValue: 'WMV' },
    { value: '4', viewValue: 'GIF' }
  ];

  get acceptedFileTypes(): string {
    const fileExtensions = this.imageTypes.map(ft => ft.viewValue.toLowerCase());
    const videoExtensions = this.videoTypes.map(vt => vt.viewValue.toLowerCase());
    return fileExtensions.concat(videoExtensions).map(ext => `.${ext}`).join(',');
  }

  ngAfterViewInit() {
    const container = document.getElementsByClassName('file-converter-container')[0];
    if (container) {
      container.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (!target.closest('mat-form-field')) this.openFileSelection();
      });
    }

    const submitButton = document.getElementsByClassName('submit-button')[0];
    if(submitButton) {
      submitButton.addEventListener('click', () => {
        const file = this.fileInput?.nativeElement.files?.item(0);
        if (file) {
          const selectedConversionType = this.imageTypes.find(it => it.value === this.selectedValue)?.viewValue || '';
          if (file.type.includes('image')) {
            this.convertImageFile(file, selectedConversionType);
          } else if (file.type.includes('video')) {
            this.convertVideoFile();
          }
        }
        this.clearSelectedFile();
      });
    }
  }
  
  openFileSelection(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      this.isFileSelected = true;
    } 
  }

  clearSelectedFile() {
    this.fileName = 'Click to select a file';
    this.isFileSelected = false;
    if (this.selectedValue) {
      this.selectedValue = '';
    }
    
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  convertImageFile(fileName: File, selectedConversionType: string) {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const image = new Image();
      image.src = event.target?.result as string;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
          const dataUrl = canvas.toDataURL(`image/${selectedConversionType}`);
  
          // Save the file
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `${fileName.name.split('.')[0]}.${selectedConversionType}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    }
    fileReader.readAsDataURL(fileName);
  }

  convertVideoFile() {
    
  }

  dataURLtoFile(dataUrl: string, fileName: string): File {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  }
}
