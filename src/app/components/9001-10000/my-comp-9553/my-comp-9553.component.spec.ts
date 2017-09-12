import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9553Component } from './my-comp-9553.component';

describe('MyComp9553Component', () => {
  let component: MyComp9553Component;
  let fixture: ComponentFixture<MyComp9553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
