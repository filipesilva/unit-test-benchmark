import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5808Component } from './my-comp-5808.component';

describe('MyComp5808Component', () => {
  let component: MyComp5808Component;
  let fixture: ComponentFixture<MyComp5808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
