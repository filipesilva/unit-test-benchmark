import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp902Component } from './my-comp-902.component';

describe('MyComp902Component', () => {
  let component: MyComp902Component;
  let fixture: ComponentFixture<MyComp902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
