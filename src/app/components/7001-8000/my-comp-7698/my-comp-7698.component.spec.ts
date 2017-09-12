import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7698Component } from './my-comp-7698.component';

describe('MyComp7698Component', () => {
  let component: MyComp7698Component;
  let fixture: ComponentFixture<MyComp7698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
