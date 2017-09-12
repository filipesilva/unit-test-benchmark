import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1225Component } from './my-comp-1225.component';

describe('MyComp1225Component', () => {
  let component: MyComp1225Component;
  let fixture: ComponentFixture<MyComp1225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
