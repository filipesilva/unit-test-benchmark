import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5291Component } from './my-comp-5291.component';

describe('MyComp5291Component', () => {
  let component: MyComp5291Component;
  let fixture: ComponentFixture<MyComp5291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
