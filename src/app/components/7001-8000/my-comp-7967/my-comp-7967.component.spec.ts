import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7967Component } from './my-comp-7967.component';

describe('MyComp7967Component', () => {
  let component: MyComp7967Component;
  let fixture: ComponentFixture<MyComp7967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
