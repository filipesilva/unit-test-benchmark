import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4100Component } from './my-comp-4100.component';

describe('MyComp4100Component', () => {
  let component: MyComp4100Component;
  let fixture: ComponentFixture<MyComp4100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
