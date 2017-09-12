import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2884Component } from './my-comp-2884.component';

describe('MyComp2884Component', () => {
  let component: MyComp2884Component;
  let fixture: ComponentFixture<MyComp2884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
