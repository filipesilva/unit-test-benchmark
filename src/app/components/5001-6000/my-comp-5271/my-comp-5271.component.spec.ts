import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5271Component } from './my-comp-5271.component';

describe('MyComp5271Component', () => {
  let component: MyComp5271Component;
  let fixture: ComponentFixture<MyComp5271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
