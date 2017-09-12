import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5902Component } from './my-comp-5902.component';

describe('MyComp5902Component', () => {
  let component: MyComp5902Component;
  let fixture: ComponentFixture<MyComp5902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
