import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp736Component } from './my-comp-736.component';

describe('MyComp736Component', () => {
  let component: MyComp736Component;
  let fixture: ComponentFixture<MyComp736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
