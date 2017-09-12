import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9478Component } from './my-comp-9478.component';

describe('MyComp9478Component', () => {
  let component: MyComp9478Component;
  let fixture: ComponentFixture<MyComp9478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
