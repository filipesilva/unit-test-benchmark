import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7746Component } from './my-comp-7746.component';

describe('MyComp7746Component', () => {
  let component: MyComp7746Component;
  let fixture: ComponentFixture<MyComp7746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
