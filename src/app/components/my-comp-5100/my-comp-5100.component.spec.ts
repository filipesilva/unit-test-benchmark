import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5100Component } from './my-comp-5100.component';

describe('MyComp5100Component', () => {
  let component: MyComp5100Component;
  let fixture: ComponentFixture<MyComp5100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
