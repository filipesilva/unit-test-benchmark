import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2463Component } from './my-comp-2463.component';

describe('MyComp2463Component', () => {
  let component: MyComp2463Component;
  let fixture: ComponentFixture<MyComp2463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
