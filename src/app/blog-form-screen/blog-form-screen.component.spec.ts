import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFormScreenComponent } from './blog-form-screen.component';

describe('BlogFormScreenComponent', () => {
  let component: BlogFormScreenComponent;
  let fixture: ComponentFixture<BlogFormScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFormScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFormScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
