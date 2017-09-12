import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6698Component } from './my-comp-6698.component';

describe('MyComp6698Component', () => {
  let component: MyComp6698Component;
  let fixture: ComponentFixture<MyComp6698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
