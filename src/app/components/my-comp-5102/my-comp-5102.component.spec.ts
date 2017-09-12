import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5102Component } from './my-comp-5102.component';

describe('MyComp5102Component', () => {
  let component: MyComp5102Component;
  let fixture: ComponentFixture<MyComp5102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
