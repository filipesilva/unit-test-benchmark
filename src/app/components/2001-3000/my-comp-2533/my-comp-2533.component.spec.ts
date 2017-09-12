import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2533Component } from './my-comp-2533.component';

describe('MyComp2533Component', () => {
  let component: MyComp2533Component;
  let fixture: ComponentFixture<MyComp2533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
