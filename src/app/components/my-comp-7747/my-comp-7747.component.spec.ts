import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7747Component } from './my-comp-7747.component';

describe('MyComp7747Component', () => {
  let component: MyComp7747Component;
  let fixture: ComponentFixture<MyComp7747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
