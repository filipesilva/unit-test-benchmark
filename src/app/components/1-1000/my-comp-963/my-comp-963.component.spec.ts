import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp963Component } from './my-comp-963.component';

describe('MyComp963Component', () => {
  let component: MyComp963Component;
  let fixture: ComponentFixture<MyComp963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
