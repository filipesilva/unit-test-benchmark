import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4194Component } from './my-comp-4194.component';

describe('MyComp4194Component', () => {
  let component: MyComp4194Component;
  let fixture: ComponentFixture<MyComp4194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
