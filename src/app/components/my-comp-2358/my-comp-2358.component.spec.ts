import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2358Component } from './my-comp-2358.component';

describe('MyComp2358Component', () => {
  let component: MyComp2358Component;
  let fixture: ComponentFixture<MyComp2358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
