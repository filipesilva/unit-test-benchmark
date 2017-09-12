import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6600Component } from './my-comp-6600.component';

describe('MyComp6600Component', () => {
  let component: MyComp6600Component;
  let fixture: ComponentFixture<MyComp6600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
