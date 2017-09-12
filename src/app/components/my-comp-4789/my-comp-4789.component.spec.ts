import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4789Component } from './my-comp-4789.component';

describe('MyComp4789Component', () => {
  let component: MyComp4789Component;
  let fixture: ComponentFixture<MyComp4789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
