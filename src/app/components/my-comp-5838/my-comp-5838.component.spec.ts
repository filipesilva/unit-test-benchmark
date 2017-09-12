import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5838Component } from './my-comp-5838.component';

describe('MyComp5838Component', () => {
  let component: MyComp5838Component;
  let fixture: ComponentFixture<MyComp5838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
