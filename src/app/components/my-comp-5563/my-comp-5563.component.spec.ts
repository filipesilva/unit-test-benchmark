import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5563Component } from './my-comp-5563.component';

describe('MyComp5563Component', () => {
  let component: MyComp5563Component;
  let fixture: ComponentFixture<MyComp5563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
