import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5327Component } from './my-comp-5327.component';

describe('MyComp5327Component', () => {
  let component: MyComp5327Component;
  let fixture: ComponentFixture<MyComp5327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
