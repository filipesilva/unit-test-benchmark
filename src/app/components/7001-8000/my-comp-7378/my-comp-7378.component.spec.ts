import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7378Component } from './my-comp-7378.component';

describe('MyComp7378Component', () => {
  let component: MyComp7378Component;
  let fixture: ComponentFixture<MyComp7378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
