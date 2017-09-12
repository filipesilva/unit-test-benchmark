import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9131Component } from './my-comp-9131.component';

describe('MyComp9131Component', () => {
  let component: MyComp9131Component;
  let fixture: ComponentFixture<MyComp9131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
