export default function KnowledgePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Knowledge Workspace
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Upload Documents
          </h3>

          <div className="border-2 border-dashed h-48 rounded-lg flex items-center justify-center">
            Upload PDF / DOCX
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Document Library
          </h3>

          <ul className="space-y-2">
            <li>research.pdf</li>
            <li>security.pdf</li>
            <li>notes.pdf</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Embedding Status
          </h3>
          <ul className="space-y-2">
            <li>Processing Complete</li>
            <li>Vectorized Successfully</li>
            <li>Embedding Pipeline Active</li>
            <li>Knowledge Indexed</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Chunk-viewer
          </h3>
           <ul className="space-y-2">
            <li>Chunks Generated</li>
            <li>Document Segmented</li>
            <li>Content Parsed </li>
            <li>Chunk Processing Complete</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
           Vector Database Status
          </h3>
           <ul className="space-y-2">
            <li>Indexed Successfully</li>
            <li>Vector Store Active</li>
            <li>Database Synced </li>
            <li>Knowledge Base Ready</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Recent Uploaded Files
          </h3>
          <ul className="space-y-2">
          <li>3 Files Uploaded</li>
          <li>Latest Documents Available</li>
          <li>Recently Added</li>
          <li>Documents Synced</li>
           <li>Upload History Active</li>
          </ul>
        </div>

      </div>
    </div>
  );
}