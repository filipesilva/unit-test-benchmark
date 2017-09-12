import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6398Component } from './my-comp-6398.component';

describe('MyComp6398Component', () => {
  let component: MyComp6398Component;
  let fixture: ComponentFixture<MyComp6398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
