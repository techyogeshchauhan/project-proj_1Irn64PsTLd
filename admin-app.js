function AdminApp() {
  try {
    const [submissions, setSubmissions] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [selectedSubmission, setSelectedSubmission] = React.useState(null);

    React.useEffect(() => {
      loadSubmissions();
    }, []);

    const loadSubmissions = async () => {
      try {
        setLoading(true);
        const result = await trickleListObjects('contact_submissions', 50, true);
        setSubmissions(result.items);
      } catch (error) {
        console.error('Error loading submissions:', error);
      } finally {
        setLoading(false);
      }
    };

    const updateStatus = async (objectId, newStatus) => {
      try {
        await trickleUpdateObject('contact_submissions', objectId, { status: newStatus });
        await loadSubmissions();
        if (selectedSubmission && selectedSubmission.objectId === objectId) {
          setSelectedSubmission({ ...selectedSubmission, objectData: { ...selectedSubmission.objectData, status: newStatus } });
        }
      } catch (error) {
        console.error('Error updating status:', error);
      }
    };

    const getStatusColor = (status) => {
      switch (status) {
        case 'new': return 'bg-blue-100 text-blue-800';
        case 'read': return 'bg-yellow-100 text-yellow-800';
        case 'responded': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div>Loading submissions...</div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50" data-name="admin-app" data-file="admin-app.js">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">Contact Submissions</h1>
              <a href="index.html" className="text-[var(--primary-color)] hover:text-[var(--primary-dark)] flex items-center space-x-2">
                <div className="icon-arrow-left text-lg"></div>
                <span>Back to Portfolio</span>
              </a>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Submissions List */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">All Submissions ({submissions.length})</h2>
              </div>
              <div className="divide-y max-h-96 overflow-y-auto">
                {submissions.map((submission) => (
                  <div 
                    key={submission.objectId}
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedSubmission?.objectId === submission.objectId ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium text-[var(--text-primary)]">{submission.objectData.name}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.objectData.status)}`}>
                        {submission.objectData.status}
                      </span>
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] mb-2">{submission.objectData.email}</div>
                    <div className="text-sm text-[var(--text-secondary)] line-clamp-2">{submission.objectData.message}</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-2">{formatDate(submission.objectData.submitted_at)}</div>
                  </div>
                ))}
                {submissions.length === 0 && (
                  <div className="p-8 text-center text-[var(--text-secondary)]">
                    No submissions yet
                  </div>
                )}
              </div>
            </div>

            {/* Submission Detail */}
            <div className="bg-white rounded-lg shadow">
              {selectedSubmission ? (
                <div>
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Submission Details</h2>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updateStatus(selectedSubmission.objectId, 'read')}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded text-sm hover:bg-yellow-200"
                        >
                          Mark as Read
                        </button>
                        <button
                          onClick={() => updateStatus(selectedSubmission.objectId, 'responded')}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm hover:bg-green-200"
                        >
                          Mark as Responded
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Name</label>
                      <div className="text-[var(--text-secondary)]">{selectedSubmission.objectData.name}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Email</label>
                      <div className="text-[var(--text-secondary)]">{selectedSubmission.objectData.email}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Message</label>
                      <div className="text-[var(--text-secondary)] whitespace-pre-wrap">{selectedSubmission.objectData.message}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Submitted</label>
                      <div className="text-[var(--text-secondary)]">{formatDate(selectedSubmission.objectData.submitted_at)}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Status</label>
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedSubmission.objectData.status)}`}>
                        {selectedSubmission.objectData.status}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center text-[var(--text-secondary)]">
                  Select a submission to view details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminApp component error:', error);
    return null;
  }
}

const adminRoot = ReactDOM.createRoot(document.getElementById('admin-root'));
adminRoot.render(<AdminApp />);