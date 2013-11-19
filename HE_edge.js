function HE_edge(vert, pair, face, next) {
	// data
	this.vert = vert; // vertex at the end of the half-edge
	this.pair = pair; // oppositely oriented adjacent half-edge
	this.face = face; // face the half-edge borders
	this.next = next; // next half-edge around the face
}

// functions

module.exports = HE_edge;