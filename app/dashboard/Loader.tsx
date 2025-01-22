// components/Loader.tsx
const Loader: React.FC = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner">
          <style jsx>{`
            .spinner {
              border: 4px solid rgba(0, 0, 0, 0.1);
              border-left-color: #4caf50;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>
    );
  };
  
  export default Loader;
  