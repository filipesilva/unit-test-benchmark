import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2501Component } from './my-comp-2501.component';

describe('MyComp2501Component', () => {
  let component: MyComp2501Component;
  let fixture: ComponentFixture<MyComp2501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
