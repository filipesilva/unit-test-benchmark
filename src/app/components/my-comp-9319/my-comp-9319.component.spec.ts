import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9319Component } from './my-comp-9319.component';

describe('MyComp9319Component', () => {
  let component: MyComp9319Component;
  let fixture: ComponentFixture<MyComp9319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
