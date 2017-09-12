import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5844Component } from './my-comp-5844.component';

describe('MyComp5844Component', () => {
  let component: MyComp5844Component;
  let fixture: ComponentFixture<MyComp5844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
