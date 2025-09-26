import React, { useState } from 'react';
import { Sprout, Users, TrendingUp, Calendar, Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' }
];

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const handleSmartPlanning = () => {
    setCurrentView('planning');
  };

  const renderPlanningView = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            ← Back to Home
          </button>
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium">{selectedLanguage.nativeName}</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setSelectedLanguage(language);
                      setIsLanguageDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-sm">{language.nativeName}</div>
                    <div className="text-xs text-gray-500">{language.name}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Calendar className="w-8 h-8 text-green-600 mr-3" />
            Smart Crop Planning
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Size (acres)
                </label>
                <input
                  type="number"
                  placeholder="Enter farm size"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select soil type</option>
                  <option>Clay</option>
                  <option>Sandy</option>
                  <option>Loamy</option>
                  <option>Silty</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select budget range</option>
                  <option>₹10,000 - ₹50,000</option>
                  <option>₹50,000 - ₹1,00,000</option>
                  <option>₹1,00,000 - ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                AI Recommendations
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-medium text-gray-800">Recommended Crops</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Based on your location and season: Rice, Wheat, Sugarcane
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-medium text-gray-800">Best Planting Time</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Optimal planting window: March 15 - April 30
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-medium text-gray-800">Expected Yield</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Projected yield: 25-30 quintals per acre
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Generate Detailed Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Sprout className="w-8 h-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">AgriTech Platform</h1>
            </div>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium">{selectedLanguage.nativeName}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setSelectedLanguage(language);
                        setIsLanguageDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium text-sm">{language.nativeName}</div>
                      <div className="text-xs text-gray-500">{language.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Empowering Farmers with
            <span className="text-green-600"> Smart Technology</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your agricultural practices with AI-powered insights, real-time monitoring, 
            and data-driven decisions for sustainable farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleSmartPlanning}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Smart Planning
            </button>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Comprehensive Agricultural Solutions
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Sprout className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Crop Management</h4>
              <p className="text-gray-600 mb-6">
                Monitor crop health, track growth stages, and receive personalized recommendations 
                for optimal yield and quality.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Disease detection & prevention
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Growth stage tracking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Harvest optimization
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Market Analytics</h4>
              <p className="text-gray-600 mb-6">
                Access real-time market prices, demand forecasts, and trading opportunities 
                to maximize your profits.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Real-time price tracking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Demand forecasting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Direct buyer connections
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Community Network</h4>
              <p className="text-gray-600 mb-6">
                Connect with fellow farmers, share experiences, and learn from agricultural 
                experts in your region.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Expert consultations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Farmer forums
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Knowledge sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Acres Monitored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">30%</div>
              <div className="text-gray-600">Yield Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h3>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers who are already using our platform to increase 
            their productivity and profits.
          </p>
          <button 
            onClick={handleSmartPlanning}
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.relative')) {
          setIsLanguageDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageDropdownOpen]);

  return currentView === 'home' ? renderHomeView() : renderPlanningView();
}

export default App;