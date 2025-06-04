
import React, { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import { ChevronDown, ChevronRight, MapPin } from "lucide-react";

const Locations = () => {
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());
  const [expandedProvinces, setExpandedProvinces] = useState<Set<string>>(new Set());

  const toggleExpanded = (location: string, isProvince = false) => {
    const setExpanded = isProvince ? setExpandedProvinces : setExpandedStates;
    const expanded = isProvince ? expandedProvinces : expandedStates;
    
    const newExpanded = new Set(expanded);
    if (newExpanded.has(location)) {
      newExpanded.delete(location);
    } else {
      newExpanded.add(location);
    }
    setExpanded(newExpanded);
  };

  const usaLocations = {
    Alabama: ["Birmingham", "Montgomery", "Mobile"],
    Alaska: ["Anchorage", "Fairbanks", "Juneau"],
    Arizona: ["Phoenix", "Tucson", "Mesa"],
    Arkansas: ["Little Rock", "Fayetteville", "Fort Smith"],
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Colorado: ["Telluride", "Denver", "Colorado Springs"],
    Connecticut: ["Aurora", "Bridgeport", "New Haven"],
    Delaware: ["Hartford", "Wilmington", "Dover"],
    Florida: ["Newark", "Miami", "Orlando"],
    Georgia: ["Tampa", "Atlanta", "Savannah"],
    Hawaii: ["Augusta", "Honolulu", "Hilo"],
    Idaho: ["Kailua", "Boise", "Idaho Falls"],
    Illinois: ["Meridian", "Chicago", "Springfield"],
    Indiana: ["Peoria", "Indianapolis", "Fort Wayne"],
    Iowa: ["Evansville", "Des Moines", "Cedar Rapids"],
    Kansas: ["Davenport", "Wichita", "Overland Park"],
    Kentucky: ["Kansas City", "Louisville", "Lexington"],
    Louisiana: ["Bowling Green", "New Orleans", "Baton Rouge"],
    Maine: ["Shreveport", "Portland", "Augusta"],
    Maryland: ["Bangor", "Baltimore", "Annapolis"],
    Massachusetts: ["Frederick", "Boston", "Worcester"],
    Michigan: ["Springfield", "Detroit", "Grand Rapids"],
    Minnesota: ["Lansing", "Minneapolis", "Saint Paul"],
    Mississippi: ["Rochester", "Jackson", "Gulfport"],
    Missouri: ["Hattiesburg", "Kansas City", "Saint Louis"],
    Montana: ["Springfield", "Billings", "Missoula"],
    Nebraska: ["Great Falls", "Omaha", "Lincoln"],
    Nevada: ["Bellevue", "Las Vegas", "Reno"],
    "New Hampshire": ["Henderson", "Manchester", "Nashua"],
    "New Jersey": ["Concord", "Newark", "Jersey City"],
    "New Mexico": ["Paterson", "Albuquerque", "Santa Fe"],
    "New York": ["Las Cruces", "New York City", "Buffalo"],
    "North Carolina": ["Rochester", "Charlotte", "Raleigh"],
    "North Dakota": ["Greensboro", "Fargo", "Bismarck"],
    Ohio: ["Grand Forks", "Columbus", "Cleveland"],
    Oklahoma: ["Cincinnati", "Oklahoma City", "Tulsa"],
    Oregon: ["Norman", "Portland", "Eugene"],
    Pennsylvania: ["Salem", "Philadelphia", "Pittsburgh"],
    "Rhode Island": ["Allentown", "Providence", "Warwick"],
    "South Carolina": ["Cranston", "Charleston", "Columbia"],
    "South Dakota": ["Greenville", "Sioux Falls", "Rapid City"],
    Tennessee: ["Aberdeen", "Nashville", "Memphis"],
    Texas: ["Knoxville", "Houston", "Dallas"],
    Utah: ["Austin", "Salt Lake City", "Provo"],
    Vermont: ["Ogden", "Burlington", "Montpelier"],
    Virginia: ["Rutland", "Virginia Beach", "Richmond"],
    Washington: ["Norfolk", "Seattle", "Spokane"],
    "West Virginia": ["Tacoma", "Charleston", "Huntington"],
    Wisconsin: ["Morgantown", "Milwaukee", "Madison"],
    Wyoming: ["Green Bay", "Cheyenne", "Casper", "Laramie"]
  };

  const canadaLocations = {
    "British Columbia": ["Vancouver", "Victoria", "Surrey"],
    Alberta: ["Calgary", "Edmonton", "Red Deer"],
    Saskatchewan: ["Saskatoon", "Regina", "Prince Albert"],
    Manitoba: ["Winnipeg", "Brandon", "Steinbach"],
    Ontario: ["Toronto", "Ottawa", "Hamilton"],
    Quebec: ["Montreal", "Quebec City", "Laval"],
    "New Brunswick": ["Saint John", "Moncton", "Fredericton"],
    "Nova Scotia": ["Halifax", "Sydney", "Dartmouth"],
    "Prince Edward Island": ["Charlottetown", "Summerside", "Stratford"],
    "Newfoundland and Labrador": ["St. John's", "Mount Pearl", "Corner Brook"]
  };

  const LocationSection = ({ 
    title, 
    locations, 
    isProvince = false 
  }: { 
    title: string; 
    locations: Record<string, string[]>; 
    isProvince?: boolean;
  }) => {
    const expanded = isProvince ? expandedProvinces : expandedStates;
    
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-synapse-primary mb-6 flex items-center">
          <MapPin className="mr-3" size={24} />
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(locations).map(([state, cities]) => (
            <div key={state} className="border border-gray-100 rounded-lg">
              <button
                onClick={() => toggleExpanded(state, isProvince)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-synapse-dark">{state}</span>
                {expanded.has(state) ? 
                  <ChevronDown size={16} className="text-synapse-primary" /> : 
                  <ChevronRight size={16} className="text-synapse-primary" />
                }
              </button>
              {expanded.has(state) && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="space-y-2 pt-3">
                    {cities.map((city) => (
                      <div key={city} className="text-sm text-synapse-gray hover:text-synapse-primary cursor-pointer pl-2">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Our Locations"
      description="Find Synapse recruitment services across the United States and Canada"
    >
      <div className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-4">
              Our Locations
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Synapse has a presence across North America, providing exceptional recruitment services 
              in major cities and metropolitan areas throughout the United States and Canada.
            </p>
          </div>

          <div className="space-y-8">
            <LocationSection title="United States" locations={usaLocations} />
            <LocationSection title="Canada" locations={canadaLocations} isProvince={true} />
          </div>

          <div className="mt-12 text-center">
            <div className="bg-synapse-lighter rounded-lg p-8">
              <h3 className="text-2xl font-bold text-synapse-dark mb-4">
                Don't see your location?
              </h3>
              <p className="text-synapse-gray mb-6">
                We're always expanding our reach. Contact us to learn about opportunities in your area.
              </p>
              <a 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Locations;
