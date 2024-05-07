export interface GifhovComponentObjectType {
  gifURL: string;
  audioURL: string;
  id: string;
}

export type GifhovComponentObjectTypeArray = GifhovComponentObjectType[];

export type GifhovMetadataPropsType = {
  ownerID: string;
  gifhovID: string;
};

export interface GifhovComponentPropsType {
  gifURL: string;
  audioURL: string;
  ownerID: string;
  gifhovID: string;
  marginBottom: boolean;
  marginTop: boolean;
}
