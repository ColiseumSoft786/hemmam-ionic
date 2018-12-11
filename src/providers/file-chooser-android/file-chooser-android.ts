import {Injectable} from '@angular/core';
import {File, FileEntry, IFile} from "@ionic-native/file";
import {Base64} from "@ionic-native/base64";
import {FilePath} from "@ionic-native/file-path";
import {FileChooser} from "@ionic-native/file-chooser";
/*
  Generated class for the FileChooserAndroidProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileChooserAndroidProvider {

    constructor(private base64: Base64, private filePath: FilePath, private file: File, private fileChooser: FileChooser) {
    }
    getFileInfo(): Promise<any> {
        return this.fileChooser.open().then((fileURI) => {
            return this.filePath.resolveNativePath(fileURI).then((filePath) => {
                return this.file.resolveLocalFilesystemUrl(filePath).then((fileEntry: FileEntry) => {
                    return new Promise((resolve, reject) => {
                        fileEntry.file(meta => resolve(meta), error => reject(error));
                    });
                }).then((fileMeta: IFile) => {
                    return new Promise((resolve, reject) => {
                        return this.base64.encodeFile(filePath).then((base64Data) => {
                            resolve({
                                fileData: base64Data,
                                fileName: fileMeta.name,
                                fileSize: fileMeta.size,
                                fileType: fileMeta.type
                            })
                        }).catch((error) => {
                            reject(error);
                        })
                    })
                });
            });
        });
    }

}
