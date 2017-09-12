import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp281Component } from './my-comp-281.component';

describe('MyComp281Component', () => {
  let component: MyComp281Component;
  let fixture: ComponentFixture<MyComp281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
