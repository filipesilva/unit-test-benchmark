import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7380Component } from './my-comp-7380.component';

describe('MyComp7380Component', () => {
  let component: MyComp7380Component;
  let fixture: ComponentFixture<MyComp7380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
