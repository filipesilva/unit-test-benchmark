import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6951Component } from './my-comp-6951.component';

describe('MyComp6951Component', () => {
  let component: MyComp6951Component;
  let fixture: ComponentFixture<MyComp6951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
