import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp906Component } from './my-comp-906.component';

describe('MyComp906Component', () => {
  let component: MyComp906Component;
  let fixture: ComponentFixture<MyComp906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
