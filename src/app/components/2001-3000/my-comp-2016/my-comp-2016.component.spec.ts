import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2016Component } from './my-comp-2016.component';

describe('MyComp2016Component', () => {
  let component: MyComp2016Component;
  let fixture: ComponentFixture<MyComp2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
