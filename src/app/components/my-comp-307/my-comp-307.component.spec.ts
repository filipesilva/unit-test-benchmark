import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp307Component } from './my-comp-307.component';

describe('MyComp307Component', () => {
  let component: MyComp307Component;
  let fixture: ComponentFixture<MyComp307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
