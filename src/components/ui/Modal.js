'use client';

export default function Modal({ isOpen, onClose, width = 'auto', height = 'auto', children }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
            onClick={onClose}
        >
            <div
                className="mt-30 sm:mt-0 rounded-lg overflow-hidden  relative max-h-full"
                style={{
                    width: width,
                    maxWidth: '95vw',
                    height: height === 'auto' ? 'auto' : 'auto',
                    maxHeight: '95vh',
                }}
                onClick={(e) => { e.stopPropagation() }}
            >
                <div
                    className="overflow-y-auto max-h-full"
                    style={{
                        height: height !== 'auto' ? height : 'auto',
                        maxHeight: '95vh'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}