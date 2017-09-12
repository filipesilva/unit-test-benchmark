import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9840Component } from './my-comp-9840.component';

describe('MyComp9840Component', () => {
  let component: MyComp9840Component;
  let fixture: ComponentFixture<MyComp9840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
