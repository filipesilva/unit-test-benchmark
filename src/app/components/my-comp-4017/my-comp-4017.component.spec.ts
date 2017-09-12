import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4017Component } from './my-comp-4017.component';

describe('MyComp4017Component', () => {
  let component: MyComp4017Component;
  let fixture: ComponentFixture<MyComp4017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
