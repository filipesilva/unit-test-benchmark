import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2055Component } from './my-comp-2055.component';

describe('MyComp2055Component', () => {
  let component: MyComp2055Component;
  let fixture: ComponentFixture<MyComp2055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
