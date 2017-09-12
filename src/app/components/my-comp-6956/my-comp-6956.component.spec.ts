import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6956Component } from './my-comp-6956.component';

describe('MyComp6956Component', () => {
  let component: MyComp6956Component;
  let fixture: ComponentFixture<MyComp6956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
