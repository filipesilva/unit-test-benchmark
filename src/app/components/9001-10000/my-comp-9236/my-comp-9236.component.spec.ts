import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9236Component } from './my-comp-9236.component';

describe('MyComp9236Component', () => {
  let component: MyComp9236Component;
  let fixture: ComponentFixture<MyComp9236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
