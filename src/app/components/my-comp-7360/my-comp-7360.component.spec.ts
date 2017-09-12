import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7360Component } from './my-comp-7360.component';

describe('MyComp7360Component', () => {
  let component: MyComp7360Component;
  let fixture: ComponentFixture<MyComp7360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
