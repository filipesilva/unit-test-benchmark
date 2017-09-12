import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp886Component } from './my-comp-886.component';

describe('MyComp886Component', () => {
  let component: MyComp886Component;
  let fixture: ComponentFixture<MyComp886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
