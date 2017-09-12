import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4794Component } from './my-comp-4794.component';

describe('MyComp4794Component', () => {
  let component: MyComp4794Component;
  let fixture: ComponentFixture<MyComp4794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
