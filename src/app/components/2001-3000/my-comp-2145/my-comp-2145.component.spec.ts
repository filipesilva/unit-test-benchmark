import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2145Component } from './my-comp-2145.component';

describe('MyComp2145Component', () => {
  let component: MyComp2145Component;
  let fixture: ComponentFixture<MyComp2145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
