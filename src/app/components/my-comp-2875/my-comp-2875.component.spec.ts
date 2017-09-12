import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2875Component } from './my-comp-2875.component';

describe('MyComp2875Component', () => {
  let component: MyComp2875Component;
  let fixture: ComponentFixture<MyComp2875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
