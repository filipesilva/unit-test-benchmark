import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7495Component } from './my-comp-7495.component';

describe('MyComp7495Component', () => {
  let component: MyComp7495Component;
  let fixture: ComponentFixture<MyComp7495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
