import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7683Component } from './my-comp-7683.component';

describe('MyComp7683Component', () => {
  let component: MyComp7683Component;
  let fixture: ComponentFixture<MyComp7683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
