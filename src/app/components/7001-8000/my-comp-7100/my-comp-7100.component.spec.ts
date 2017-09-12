import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7100Component } from './my-comp-7100.component';

describe('MyComp7100Component', () => {
  let component: MyComp7100Component;
  let fixture: ComponentFixture<MyComp7100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
