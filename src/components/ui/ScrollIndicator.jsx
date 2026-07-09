function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
      <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
        <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;