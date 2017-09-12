import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2970Component } from './my-comp-2970.component';

describe('MyComp2970Component', () => {
  let component: MyComp2970Component;
  let fixture: ComponentFixture<MyComp2970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
