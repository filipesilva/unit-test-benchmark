import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7588Component } from './my-comp-7588.component';

describe('MyComp7588Component', () => {
  let component: MyComp7588Component;
  let fixture: ComponentFixture<MyComp7588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
