export interface ImageHandleAdapter {
  saveImage(filepath: string): Promise<string>
  delete(url: string): Promise<string>
}
