// components/ProgressBar.jsx
function ProgressBar({ currentStep }) {
    return (
      <div className="flex space-x-4 mb-8">
        <div style={{ backgroundColor: currentStep >= 1 ? '#FF9C39' : '#FF9C3966', width: '161px', height: '21px', transform: 'skewX(-20deg)' }} />
        <div style={{ backgroundColor: currentStep >= 2 ? '#FF9C39' : '#FF9C3966', width: '161px', height: '21px', transform: 'skewX(-20deg)' }} />
        <div style={{ backgroundColor: currentStep >= 3 ? '#FF9C39' : '#FF9C3966', width: '161px', height: '21px', transform: 'skewX(-20deg)' }} />
      </div>
    );
  }
  
  export default ProgressBar;  

  