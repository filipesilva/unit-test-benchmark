import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7366Component } from './my-comp-7366.component';

describe('MyComp7366Component', () => {
  let component: MyComp7366Component;
  let fixture: ComponentFixture<MyComp7366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
