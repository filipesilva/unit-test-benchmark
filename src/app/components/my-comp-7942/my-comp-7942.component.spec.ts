import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7942Component } from './my-comp-7942.component';

describe('MyComp7942Component', () => {
  let component: MyComp7942Component;
  let fixture: ComponentFixture<MyComp7942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
