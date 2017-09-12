import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6365Component } from './my-comp-6365.component';

describe('MyComp6365Component', () => {
  let component: MyComp6365Component;
  let fixture: ComponentFixture<MyComp6365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
