import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2569Component } from './my-comp-2569.component';

describe('MyComp2569Component', () => {
  let component: MyComp2569Component;
  let fixture: ComponentFixture<MyComp2569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
