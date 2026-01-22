import { Heart, MessageCircle } from "lucide-react";

export function AuthorAttribution() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-start gap-4">
        {/* Author Avatar */}
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-lg">CM</span>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-text-primary mb-1">
            CA Monk Editorial Team
          </h3>
          <p className="text-sm text-text-secondary mb-3">
            Expert insights and guidance for chartered accountants
          </p>

          {/* Engagement Actions */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              aria-label="Like this article"
            >
              <Heart className="w-4 h-4" />
              <span>Like</span>
            </button>
            <button
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              aria-label="Comment on this article"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Comment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
