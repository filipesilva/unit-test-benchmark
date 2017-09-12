import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2908Component } from './my-comp-2908.component';

describe('MyComp2908Component', () => {
  let component: MyComp2908Component;
  let fixture: ComponentFixture<MyComp2908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
