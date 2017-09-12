import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4500Component } from './my-comp-4500.component';

describe('MyComp4500Component', () => {
  let component: MyComp4500Component;
  let fixture: ComponentFixture<MyComp4500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
