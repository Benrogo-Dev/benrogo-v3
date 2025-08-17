export const internal = (error: unknown) => {
  return Response.json({
    message: 'Internal Server Error',
    error: (error as { message?: unknown })?.message ?? error
  }, { status: 500 });
};