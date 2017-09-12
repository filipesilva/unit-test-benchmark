import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5906Component } from './my-comp-5906.component';

describe('MyComp5906Component', () => {
  let component: MyComp5906Component;
  let fixture: ComponentFixture<MyComp5906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
