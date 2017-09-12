import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7582Component } from './my-comp-7582.component';

describe('MyComp7582Component', () => {
  let component: MyComp7582Component;
  let fixture: ComponentFixture<MyComp7582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
