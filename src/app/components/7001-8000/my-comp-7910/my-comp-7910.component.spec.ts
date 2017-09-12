import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7910Component } from './my-comp-7910.component';

describe('MyComp7910Component', () => {
  let component: MyComp7910Component;
  let fixture: ComponentFixture<MyComp7910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
