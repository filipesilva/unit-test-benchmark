import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5241Component } from './my-comp-5241.component';

describe('MyComp5241Component', () => {
  let component: MyComp5241Component;
  let fixture: ComponentFixture<MyComp5241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
