import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp233Component } from './my-comp-233.component';

describe('MyComp233Component', () => {
  let component: MyComp233Component;
  let fixture: ComponentFixture<MyComp233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
