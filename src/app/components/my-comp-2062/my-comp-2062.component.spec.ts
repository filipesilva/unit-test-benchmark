import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2062Component } from './my-comp-2062.component';

describe('MyComp2062Component', () => {
  let component: MyComp2062Component;
  let fixture: ComponentFixture<MyComp2062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
