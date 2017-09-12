import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2064Component } from './my-comp-2064.component';

describe('MyComp2064Component', () => {
  let component: MyComp2064Component;
  let fixture: ComponentFixture<MyComp2064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
