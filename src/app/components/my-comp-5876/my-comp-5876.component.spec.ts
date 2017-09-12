import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5876Component } from './my-comp-5876.component';

describe('MyComp5876Component', () => {
  let component: MyComp5876Component;
  let fixture: ComponentFixture<MyComp5876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
