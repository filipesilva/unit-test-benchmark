import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7421Component } from './my-comp-7421.component';

describe('MyComp7421Component', () => {
  let component: MyComp7421Component;
  let fixture: ComponentFixture<MyComp7421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
