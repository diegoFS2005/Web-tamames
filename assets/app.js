// 1. Guardar la elección del usuario
function saveTrack() {
    const track = document.getElementById('trackSel').value;
    localStorage.setItem('selectedTrack', track);
    alert("Has seleccionado el track: " + track);
}

// 2. Lógica del Algoritmo de Priorización
function calcular() {
    const imp = parseInt(document.getElementById('imp1').value);
    const esf = parseInt(document.getElementById('esf1').value);
    const rie = parseInt(document.getElementById('rie1').value);
    
    // Fórmula: (Impacto * 2) - Esfuerzo + Riesgo
    const total = (imp * 2) - esf + rie;
    
    document.getElementById('score1').innerText = total;
    alert("El score de este proceso es: " + total);
}

// 3. Exportar a Markdown
function exportar() {
    const contenido = "# Resultado del Laboratorio\nTrack: " + localStorage.getItem('selectedTrack') + "\n\nProceso analizado con éxito.";
    const blob = new Blob([contenido], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "entrega.md";
    link.click();
}