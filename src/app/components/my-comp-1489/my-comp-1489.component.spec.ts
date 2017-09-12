import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1489Component } from './my-comp-1489.component';

describe('MyComp1489Component', () => {
  let component: MyComp1489Component;
  let fixture: ComponentFixture<MyComp1489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
