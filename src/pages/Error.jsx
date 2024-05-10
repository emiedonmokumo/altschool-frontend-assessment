function Error() {
  throw new Error('This is a test error.');

  return (
    <div>
      <h1>Test Page</h1>
      <p>This content will be displayed if there's no error.</p>
    </div>
  );
}

export default Error;