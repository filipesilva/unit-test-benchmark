import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1600Component } from './my-comp-1600.component';

describe('MyComp1600Component', () => {
  let component: MyComp1600Component;
  let fixture: ComponentFixture<MyComp1600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
