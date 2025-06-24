import DoctorScreen from '../components/DoctorScreen';
import MusicianScreen from '../components/MusicianScreen';

export default function SplitLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-100 p-4">
        <DoctorScreen />
      </div>
      <div className="w-1/2 bg-green-100 p-4">
        <MusicianScreen />
      </div>
    </div>
  );
}
// This code defines a SplitLayout component that renders two screens side by side.
// The left side displays a DoctorScreen component, and the right side displays a MusicianScreen