import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7928Component } from './my-comp-7928.component';

describe('MyComp7928Component', () => {
  let component: MyComp7928Component;
  let fixture: ComponentFixture<MyComp7928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
