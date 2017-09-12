import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2390Component } from './my-comp-2390.component';

describe('MyComp2390Component', () => {
  let component: MyComp2390Component;
  let fixture: ComponentFixture<MyComp2390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
