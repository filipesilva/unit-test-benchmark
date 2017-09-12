import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2948Component } from './my-comp-2948.component';

describe('MyComp2948Component', () => {
  let component: MyComp2948Component;
  let fixture: ComponentFixture<MyComp2948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
