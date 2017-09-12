import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2566Component } from './my-comp-2566.component';

describe('MyComp2566Component', () => {
  let component: MyComp2566Component;
  let fixture: ComponentFixture<MyComp2566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
