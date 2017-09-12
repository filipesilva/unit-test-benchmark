import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5436Component } from './my-comp-5436.component';

describe('MyComp5436Component', () => {
  let component: MyComp5436Component;
  let fixture: ComponentFixture<MyComp5436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
