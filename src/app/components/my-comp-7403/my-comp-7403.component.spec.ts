import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7403Component } from './my-comp-7403.component';

describe('MyComp7403Component', () => {
  let component: MyComp7403Component;
  let fixture: ComponentFixture<MyComp7403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
