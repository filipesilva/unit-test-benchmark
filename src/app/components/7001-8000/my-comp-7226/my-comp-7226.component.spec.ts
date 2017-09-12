import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7226Component } from './my-comp-7226.component';

describe('MyComp7226Component', () => {
  let component: MyComp7226Component;
  let fixture: ComponentFixture<MyComp7226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
