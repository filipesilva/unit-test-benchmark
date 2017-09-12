import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7469Component } from './my-comp-7469.component';

describe('MyComp7469Component', () => {
  let component: MyComp7469Component;
  let fixture: ComponentFixture<MyComp7469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
