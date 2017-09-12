import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5233Component } from './my-comp-5233.component';

describe('MyComp5233Component', () => {
  let component: MyComp5233Component;
  let fixture: ComponentFixture<MyComp5233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
