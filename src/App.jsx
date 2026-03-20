import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import AuthModal from './components/AuthModal';
import LibraryPanel from './components/LibraryPanel';
import Toast from './components/Toast';
import DrugSearchPage from './pages/DrugSearchPage';
import CarePlanView from './pages/CarePlanView';
import DrugDetailView from './pages/DrugDetailView';
import LabGuide from './pages/LabGuide';
import SavedRecordsPage from './pages/SavedRecordsPage';

export default function App() {
  const [authModal, setAuthModal] = useState(false);
  const [libraryPanel, setLibraryPanel] = useState(false);
  const [libraryTab, setLibraryTab] = useState('plans');
  const [toast, setToast] = useState(null);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function openLibrary(tab = 'plans') {
    setLibraryTab(tab);
    setLibraryPanel(true);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#2c5f6a' }}>
      <Header
        onLoginClick={() => setAuthModal(true)}
        onLibraryClick={openLibrary}
        showToast={showToast}
      />
      <Routes>
        {/* Home = Care Plan hero (matches screenshot) */}
        <Route path="/" element={<CarePlanView showToast={showToast} onLoginNeeded={() => setAuthModal(true)} />} />
        <Route path="/care-plan" element={<CarePlanView showToast={showToast} onLoginNeeded={() => setAuthModal(true)} />} />
        <Route path="/plan/:diagnosis" element={<CarePlanView showToast={showToast} onLoginNeeded={() => setAuthModal(true)} />} />

        {/* Drug search at /drugs */}
        <Route path="/drugs" element={<DrugSearchPage showToast={showToast} onLoginNeeded={() => setAuthModal(true)} />} />
        <Route path="/drug/:drugName" element={<DrugDetailView showToast={showToast} onLoginNeeded={() => setAuthModal(true)} />} />

        <Route path="/labs" element={<LabGuide />} />
        <Route path="/saved" element={<SavedRecordsPage showToast={showToast} />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {authModal && (
        <AuthModal onClose={() => setAuthModal(false)} showToast={showToast} />
      )}
      {libraryPanel && (
        <LibraryPanel
          defaultTab={libraryTab}
          onClose={() => setLibraryPanel(false)}
          showToast={showToast}
        />
      )}
      {toast && <Toast message={toast} />}
    </div>
  );
}
