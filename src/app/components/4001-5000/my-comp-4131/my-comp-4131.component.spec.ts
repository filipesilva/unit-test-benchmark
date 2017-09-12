import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4131Component } from './my-comp-4131.component';

describe('MyComp4131Component', () => {
  let component: MyComp4131Component;
  let fixture: ComponentFixture<MyComp4131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
