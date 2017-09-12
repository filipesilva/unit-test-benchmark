import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1628Component } from './my-comp-1628.component';

describe('MyComp1628Component', () => {
  let component: MyComp1628Component;
  let fixture: ComponentFixture<MyComp1628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
