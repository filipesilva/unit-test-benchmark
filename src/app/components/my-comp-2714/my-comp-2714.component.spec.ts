import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2714Component } from './my-comp-2714.component';

describe('MyComp2714Component', () => {
  let component: MyComp2714Component;
  let fixture: ComponentFixture<MyComp2714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
