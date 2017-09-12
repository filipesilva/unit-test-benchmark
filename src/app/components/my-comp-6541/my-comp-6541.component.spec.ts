import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6541Component } from './my-comp-6541.component';

describe('MyComp6541Component', () => {
  let component: MyComp6541Component;
  let fixture: ComponentFixture<MyComp6541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
