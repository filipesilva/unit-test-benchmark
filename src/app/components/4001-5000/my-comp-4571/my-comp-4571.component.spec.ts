import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4571Component } from './my-comp-4571.component';

describe('MyComp4571Component', () => {
  let component: MyComp4571Component;
  let fixture: ComponentFixture<MyComp4571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
