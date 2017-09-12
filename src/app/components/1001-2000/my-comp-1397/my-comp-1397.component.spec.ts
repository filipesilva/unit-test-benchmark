import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1397Component } from './my-comp-1397.component';

describe('MyComp1397Component', () => {
  let component: MyComp1397Component;
  let fixture: ComponentFixture<MyComp1397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
