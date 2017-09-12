import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7310Component } from './my-comp-7310.component';

describe('MyComp7310Component', () => {
  let component: MyComp7310Component;
  let fixture: ComponentFixture<MyComp7310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
