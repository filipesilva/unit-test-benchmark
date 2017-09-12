import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2090Component } from './my-comp-2090.component';

describe('MyComp2090Component', () => {
  let component: MyComp2090Component;
  let fixture: ComponentFixture<MyComp2090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
