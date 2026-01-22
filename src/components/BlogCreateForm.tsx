import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateBlog } from '@/hooks/useCreateBlog';
import type { CreateBlogInput } from '@/types/blog';

const CATEGORY_OPTIONS = [
  'FINANCE',
  'TAX',
  'AUDIT',
  'COMPLIANCE',
  'TECH',
  'CAREER',
  'REGULATORY',
  'BUSINESS',
];

export function BlogCreateForm() {
  const navigate = useNavigate();
  const { mutate: createBlog, isPending, isError, error } = useCreateBlog();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    coverImage: '',
  });

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    } else if (formData.title.length < 10) {
      errors.title = 'Title must be at least 10 characters';
    } else if (formData.title.length > 200) {
      errors.title = 'Title must not exceed 200 characters';
    }

    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    } else if (formData.description.length < 20) {
      errors.description = 'Description must be at least 20 characters';
    } else if (formData.description.length > 500) {
      errors.description = 'Description must not exceed 500 characters';
    }

    if (!formData.content.trim()) {
      errors.content = 'Content is required';
    } else if (formData.content.length < 100) {
      errors.content = 'Content must be at least 100 characters';
    }

    if (!formData.coverImage.trim()) {
      errors.coverImage = 'Cover image URL is required';
    } else if (!isValidUrl(formData.coverImage)) {
      errors.coverImage = 'Please enter a valid URL';
    }

    if (selectedCategories.length === 0) {
      errors.category = 'Please select at least one category';
    } else if (selectedCategories.length > 3) {
      errors.category = 'Maximum 3 categories allowed';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, category];
    });

    // Clear category validation error
    if (validationErrors.category) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.category;
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const blogData: CreateBlogInput = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      content: formData.content.trim(),
      coverImage: formData.coverImage.trim(),
      category: selectedCategories,
    };

    createBlog(blogData, {
      onSuccess: (newBlog) => {
        // Redirect to the newly created blog
        navigate(`/blogs/${newBlog.id}`);
      },
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
        <h1 className="text-display-2 text-text-primary mb-2">Create New Article</h1>
        <p className="text-text-secondary mb-8">
          Share your insights with the CA Monk community
        </p>

        {isError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">
              {error?.message || 'Failed to create article. Please try again.'}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-text-primary mb-2">
              Article Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                validationErrors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter a compelling title..."
            />
            {validationErrors.title && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.title}</p>
            )}
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                validationErrors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief summary of your article..."
            />
            {validationErrors.description && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.description}</p>
            )}
          </div>

          {/* Cover Image URL Field */}
          <div>
            <label htmlFor="coverImage" className="block text-sm font-medium text-text-primary mb-2">
              Cover Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="coverImage"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                validationErrors.coverImage ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="https://example.com/image.jpg"
            />
            {validationErrors.coverImage && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.coverImage}</p>
            )}
          </div>

          {/* Categories Field */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Categories <span className="text-red-500">*</span>
              <span className="text-text-secondary font-normal ml-2">(Select up to 3)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORY_OPTIONS.map((category) => {
                const isSelected = selectedCategories.includes(category);
                const isDisabled = !isSelected && selectedCategories.length >= 3;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryToggle(category)}
                    disabled={isDisabled}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isSelected
                        ? 'bg-primary text-white'
                        : isDisabled
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            {validationErrors.category && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.category}</p>
            )}
          </div>

          {/* Content Field */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-text-primary mb-2">
              Article Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={16}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm ${
                validationErrors.content ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Write your article content here... Use double line breaks to separate paragraphs."
            />
            {validationErrors.content && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.content}</p>
            )}
            <p className="mt-2 text-sm text-text-secondary">
              Tip: End lines with ":" to create headings. Start lines with "{'>'} " for blockquotes.
            </p>
          </div>

          {/* Form Actions */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={isPending}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isPending ? 'Publishing...' : 'Publish Article'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isPending}
              className="px-6 py-3 bg-gray-100 text-text-secondary rounded-lg font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
