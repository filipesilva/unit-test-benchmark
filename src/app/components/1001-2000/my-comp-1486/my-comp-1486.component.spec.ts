import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1486Component } from './my-comp-1486.component';

describe('MyComp1486Component', () => {
  let component: MyComp1486Component;
  let fixture: ComponentFixture<MyComp1486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
