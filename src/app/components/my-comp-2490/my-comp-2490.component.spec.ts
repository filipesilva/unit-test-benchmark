import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2490Component } from './my-comp-2490.component';

describe('MyComp2490Component', () => {
  let component: MyComp2490Component;
  let fixture: ComponentFixture<MyComp2490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
