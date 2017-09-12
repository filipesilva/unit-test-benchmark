import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5501Component } from './my-comp-5501.component';

describe('MyComp5501Component', () => {
  let component: MyComp5501Component;
  let fixture: ComponentFixture<MyComp5501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
