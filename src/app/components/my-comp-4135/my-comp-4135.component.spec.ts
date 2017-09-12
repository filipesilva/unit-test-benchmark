import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4135Component } from './my-comp-4135.component';

describe('MyComp4135Component', () => {
  let component: MyComp4135Component;
  let fixture: ComponentFixture<MyComp4135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
