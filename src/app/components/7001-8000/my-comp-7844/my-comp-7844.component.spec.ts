import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7844Component } from './my-comp-7844.component';

describe('MyComp7844Component', () => {
  let component: MyComp7844Component;
  let fixture: ComponentFixture<MyComp7844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
