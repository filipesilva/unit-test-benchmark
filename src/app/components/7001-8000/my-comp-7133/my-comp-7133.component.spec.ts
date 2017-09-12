import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7133Component } from './my-comp-7133.component';

describe('MyComp7133Component', () => {
  let component: MyComp7133Component;
  let fixture: ComponentFixture<MyComp7133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
