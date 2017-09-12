import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7007Component } from './my-comp-7007.component';

describe('MyComp7007Component', () => {
  let component: MyComp7007Component;
  let fixture: ComponentFixture<MyComp7007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
