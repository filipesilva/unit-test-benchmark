import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7498Component } from './my-comp-7498.component';

describe('MyComp7498Component', () => {
  let component: MyComp7498Component;
  let fixture: ComponentFixture<MyComp7498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
