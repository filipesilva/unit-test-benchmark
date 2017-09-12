import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6719Component } from './my-comp-6719.component';

describe('MyComp6719Component', () => {
  let component: MyComp6719Component;
  let fixture: ComponentFixture<MyComp6719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
