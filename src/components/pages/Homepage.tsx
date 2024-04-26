import { Header } from "@/components/Header";
import { GifhovFileUploaderContainer } from "@/components/gifhov_file_uploader/GifhovFileUploaderContainer";
import { ClickDisclaimer } from "@/components/gifhov_file_uploader/ClickDisclaimer";
import { Footer } from "@/components/Footer";
export function Homepage() {
  return (
    <>
      <Header />
      <GifhovFileUploaderContainer />
      <ClickDisclaimer />
      <Footer />
    </>
  );
}
