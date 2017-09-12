import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2666Component } from './my-comp-2666.component';

describe('MyComp2666Component', () => {
  let component: MyComp2666Component;
  let fixture: ComponentFixture<MyComp2666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
