import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7575Component } from './my-comp-7575.component';

describe('MyComp7575Component', () => {
  let component: MyComp7575Component;
  let fixture: ComponentFixture<MyComp7575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
