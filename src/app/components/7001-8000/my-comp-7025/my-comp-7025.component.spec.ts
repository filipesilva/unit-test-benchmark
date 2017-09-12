import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7025Component } from './my-comp-7025.component';

describe('MyComp7025Component', () => {
  let component: MyComp7025Component;
  let fixture: ComponentFixture<MyComp7025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
