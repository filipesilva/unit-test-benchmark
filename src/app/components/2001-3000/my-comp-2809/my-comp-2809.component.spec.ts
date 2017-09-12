import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2809Component } from './my-comp-2809.component';

describe('MyComp2809Component', () => {
  let component: MyComp2809Component;
  let fixture: ComponentFixture<MyComp2809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
