import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5971Component } from './my-comp-5971.component';

describe('MyComp5971Component', () => {
  let component: MyComp5971Component;
  let fixture: ComponentFixture<MyComp5971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
