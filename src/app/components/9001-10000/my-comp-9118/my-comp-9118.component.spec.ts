import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9118Component } from './my-comp-9118.component';

describe('MyComp9118Component', () => {
  let component: MyComp9118Component;
  let fixture: ComponentFixture<MyComp9118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
