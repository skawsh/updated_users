import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OfferSlideshow } from './components/offers/OfferSlideshow';
import { ServicesSection } from './components/ServicesSection';
import { ShopsSection } from './components/shops/ShopsSection';
import { ShopProfile } from './components/shops/ShopProfile';
import { WashAndFoldPage } from './components/services/WashAndFoldPage';
import { DryCleaningPage } from './components/services/DryCleaningPage';
import { SearchResults } from './pages/SearchResults';
import { OrdersPage } from './pages/OrdersPage';
import { ProfilePage } from './pages/ProfilePage';
import { EditProfilePage } from './pages/profile/EditProfilePage';
import { MyActivitiesPage } from './pages/profile/MyActivitiesPage';
import { AddressesPage } from './pages/profile/AddressesPage';
import { PaymentsPage } from './pages/profile/PaymentsPage';
import { SettingsPage } from './pages/profile/SettingsPage';
import { FeedbackPage } from './pages/profile/FeedbackPage';
import { ReferPage } from './pages/profile/ReferPage';
import { SupportPage } from './pages/profile/SupportPage';
import { CoreLaundryServices } from './pages/services/CoreLaundryServices';
import { WashAndFoldDetails } from './pages/services/WashAndFoldDetails';
import { SearchProvider } from './contexts/SearchContext';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <ThemeProvider>
          <SearchProvider>
            <div className="dark:bg-gray-900 transition-colors duration-200">
              <Routes>
                <Route path="/" element={
                  <Layout>
                    <OfferSlideshow />
                    <ServicesSection />
                    <ShopsSection />
                  </Layout>
                } />
                <Route path="/shop/:shopId" element={<ShopProfile />} />
                <Route path="/services/wash-and-fold" element={<WashAndFoldPage />} />
                <Route path="/services/dry-cleaning" element={<DryCleaningPage />} />
                <Route path="/services/core-laundry" element={<CoreLaundryServices />} />
                <Route path="/services/wash-fold" element={<WashAndFoldDetails />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/edit" element={<EditProfilePage />} />
                <Route path="/profile/activities" element={<MyActivitiesPage />} />
                <Route path="/profile/addresses" element={<AddressesPage />} />
                <Route path="/profile/payments" element={<PaymentsPage />} />
                <Route path="/profile/settings" element={<SettingsPage />} />
                <Route path="/profile/feedback" element={<FeedbackPage />} />
                <Route path="/profile/refer" element={<ReferPage />} />
                <Route path="/profile/support" element={<SupportPage />} />
              </Routes>
            </div>
          </SearchProvider>
        </ThemeProvider>
      </UserProvider>
    </Router>
  );
}