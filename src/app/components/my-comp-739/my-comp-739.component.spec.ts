import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp739Component } from './my-comp-739.component';

describe('MyComp739Component', () => {
  let component: MyComp739Component;
  let fixture: ComponentFixture<MyComp739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
