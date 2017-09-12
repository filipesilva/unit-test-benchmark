import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp937Component } from './my-comp-937.component';

describe('MyComp937Component', () => {
  let component: MyComp937Component;
  let fixture: ComponentFixture<MyComp937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
