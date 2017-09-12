import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7458Component } from './my-comp-7458.component';

describe('MyComp7458Component', () => {
  let component: MyComp7458Component;
  let fixture: ComponentFixture<MyComp7458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
