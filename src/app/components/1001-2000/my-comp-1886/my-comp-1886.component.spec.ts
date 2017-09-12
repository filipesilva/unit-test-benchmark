import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1886Component } from './my-comp-1886.component';

describe('MyComp1886Component', () => {
  let component: MyComp1886Component;
  let fixture: ComponentFixture<MyComp1886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
