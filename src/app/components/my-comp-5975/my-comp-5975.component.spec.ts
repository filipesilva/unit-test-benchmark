import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5975Component } from './my-comp-5975.component';

describe('MyComp5975Component', () => {
  let component: MyComp5975Component;
  let fixture: ComponentFixture<MyComp5975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
