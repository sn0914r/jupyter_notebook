document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabClose = document.querySelector('.tab-close');
    const tabAdd = document.querySelector('.tab-add');
    
    tabClose.addEventListener('click', function(e) {
        e.stopPropagation();
        // In a real implementation, this would close the tab
        alert('Tab close functionality');
    });
    
    tabAdd.addEventListener('click', function() {
        // In a real implementation, this would add a new tab
        alert('Add new tab functionality');
    });
    
    // Toolbar button functionality
    const toolbarButtons = document.querySelectorAll('.toolbar-btn');
    toolbarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('title');
            if (title) {
                console.log(`${title} button clicked`);
            }
        });
    });
    
    // Menu item functionality
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log(`${this.textContent} menu clicked`);
        });
    });
    
    // Cell functionality
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            // Remove active class from all cells
            cells.forEach(c => c.classList.remove('active-cell'));
            // Add active class to clicked cell
            this.classList.add('active-cell');
        });
    });
    
    // Code input functionality
    const codeInputs = document.querySelectorAll('.code-input');
    codeInputs.forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;
                
                // Insert tab character
                this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
                
                // Move cursor after inserted tab
                this.selectionStart = this.selectionEnd = start + 4;
            }
            
            // Shift+Enter to run cell (simulated)
            if (e.key === 'Enter' && e.shiftKey) {
                e.preventDefault();
                console.log('Running cell:', this.value);
                // In a real implementation, this would execute the code
            }
        });
        
        // Auto-resize textarea
        input.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.max(40, this.scrollHeight) + 'px';
        });
    });
    
    // Status bar functionality
    const statusButtons = document.querySelectorAll('.status-btn');
    statusButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Status button clicked');
        });
    });
    
    // Toggle switch functionality
    const toggleSwitch = document.getElementById('simple-mode');
    toggleSwitch.addEventListener('change', function() {
        console.log('Simple mode:', this.checked);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl+S to save
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            console.log('Save shortcut pressed');
        }
        
        // Ctrl+Enter to run cell
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            console.log('Run cell shortcut pressed');
        }
        
        // Escape to command mode
        if (e.key === 'Escape') {
            document.querySelector('.status-right .status-text').textContent = 'Mode: Command';
        }
    });
    
    // Focus handling for edit mode
    codeInputs.forEach(input => {
        input.addEventListener('focus', function() {
            document.querySelector('.status-right .status-text').textContent = 'Mode: Edit';
        });
    });
    
    // Simulate kernel status updates
    let kernelStatus = ['Idle', 'Running', 'Busy'];
    let currentStatus = 0;
    
    setInterval(() => {
        // This would normally be updated based on actual kernel status
        const statusText = document.querySelector('.status-left .status-text:nth-child(5)');
        if (statusText) {
            statusText.textContent = `Python (Pyodide) | ${kernelStatus[currentStatus]}`;
            currentStatus = (currentStatus + 1) % kernelStatus.length;
        }
    }, 3000);
});