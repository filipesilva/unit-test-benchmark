import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1021Component } from './my-comp-1021.component';

describe('MyComp1021Component', () => {
  let component: MyComp1021Component;
  let fixture: ComponentFixture<MyComp1021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
