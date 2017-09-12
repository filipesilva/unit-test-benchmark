import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4171Component } from './my-comp-4171.component';

describe('MyComp4171Component', () => {
  let component: MyComp4171Component;
  let fixture: ComponentFixture<MyComp4171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
