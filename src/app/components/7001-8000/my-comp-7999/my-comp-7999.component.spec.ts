import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7999Component } from './my-comp-7999.component';

describe('MyComp7999Component', () => {
  let component: MyComp7999Component;
  let fixture: ComponentFixture<MyComp7999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
