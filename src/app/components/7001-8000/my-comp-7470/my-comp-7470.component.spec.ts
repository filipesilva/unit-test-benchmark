import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7470Component } from './my-comp-7470.component';

describe('MyComp7470Component', () => {
  let component: MyComp7470Component;
  let fixture: ComponentFixture<MyComp7470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
