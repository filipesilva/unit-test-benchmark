import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7780Component } from './my-comp-7780.component';

describe('MyComp7780Component', () => {
  let component: MyComp7780Component;
  let fixture: ComponentFixture<MyComp7780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
