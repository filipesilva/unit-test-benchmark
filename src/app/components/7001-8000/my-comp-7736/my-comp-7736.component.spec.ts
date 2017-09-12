import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7736Component } from './my-comp-7736.component';

describe('MyComp7736Component', () => {
  let component: MyComp7736Component;
  let fixture: ComponentFixture<MyComp7736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
