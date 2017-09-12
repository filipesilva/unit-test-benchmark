import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9242Component } from './my-comp-9242.component';

describe('MyComp9242Component', () => {
  let component: MyComp9242Component;
  let fixture: ComponentFixture<MyComp9242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
