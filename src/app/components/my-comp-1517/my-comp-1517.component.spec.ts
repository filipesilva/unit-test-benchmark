import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1517Component } from './my-comp-1517.component';

describe('MyComp1517Component', () => {
  let component: MyComp1517Component;
  let fixture: ComponentFixture<MyComp1517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
