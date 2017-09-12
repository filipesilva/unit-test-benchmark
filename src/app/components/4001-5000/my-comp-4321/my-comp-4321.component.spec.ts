import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4321Component } from './my-comp-4321.component';

describe('MyComp4321Component', () => {
  let component: MyComp4321Component;
  let fixture: ComponentFixture<MyComp4321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
