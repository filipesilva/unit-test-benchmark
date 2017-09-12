import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5670Component } from './my-comp-5670.component';

describe('MyComp5670Component', () => {
  let component: MyComp5670Component;
  let fixture: ComponentFixture<MyComp5670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
