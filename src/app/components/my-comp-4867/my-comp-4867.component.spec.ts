import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4867Component } from './my-comp-4867.component';

describe('MyComp4867Component', () => {
  let component: MyComp4867Component;
  let fixture: ComponentFixture<MyComp4867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
