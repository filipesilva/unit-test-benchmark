import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2141Component } from './my-comp-2141.component';

describe('MyComp2141Component', () => {
  let component: MyComp2141Component;
  let fixture: ComponentFixture<MyComp2141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
