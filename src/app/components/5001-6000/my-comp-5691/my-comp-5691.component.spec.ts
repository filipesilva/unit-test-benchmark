import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5691Component } from './my-comp-5691.component';

describe('MyComp5691Component', () => {
  let component: MyComp5691Component;
  let fixture: ComponentFixture<MyComp5691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
