import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7197Component } from './my-comp-7197.component';

describe('MyComp7197Component', () => {
  let component: MyComp7197Component;
  let fixture: ComponentFixture<MyComp7197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
