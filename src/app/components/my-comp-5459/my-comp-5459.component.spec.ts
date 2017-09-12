import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5459Component } from './my-comp-5459.component';

describe('MyComp5459Component', () => {
  let component: MyComp5459Component;
  let fixture: ComponentFixture<MyComp5459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
