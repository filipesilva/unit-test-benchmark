import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6032Component } from './my-comp-6032.component';

describe('MyComp6032Component', () => {
  let component: MyComp6032Component;
  let fixture: ComponentFixture<MyComp6032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
