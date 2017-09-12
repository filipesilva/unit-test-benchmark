import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2793Component } from './my-comp-2793.component';

describe('MyComp2793Component', () => {
  let component: MyComp2793Component;
  let fixture: ComponentFixture<MyComp2793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
