import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7408Component } from './my-comp-7408.component';

describe('MyComp7408Component', () => {
  let component: MyComp7408Component;
  let fixture: ComponentFixture<MyComp7408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
