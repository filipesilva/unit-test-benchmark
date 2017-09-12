import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6788Component } from './my-comp-6788.component';

describe('MyComp6788Component', () => {
  let component: MyComp6788Component;
  let fixture: ComponentFixture<MyComp6788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
