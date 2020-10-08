export function convertSnaps<T>(snaps) {
  return  snaps.map(snap => {
    return {
      id: snap.payload.doc.id,
      selected: false,
      ...snap.payload.doc.data()
    };
  }) as T[];
}
