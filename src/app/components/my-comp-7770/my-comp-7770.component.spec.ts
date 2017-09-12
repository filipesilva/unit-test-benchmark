import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7770Component } from './my-comp-7770.component';

describe('MyComp7770Component', () => {
  let component: MyComp7770Component;
  let fixture: ComponentFixture<MyComp7770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
