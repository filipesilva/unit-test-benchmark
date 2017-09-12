import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7818Component } from './my-comp-7818.component';

describe('MyComp7818Component', () => {
  let component: MyComp7818Component;
  let fixture: ComponentFixture<MyComp7818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
