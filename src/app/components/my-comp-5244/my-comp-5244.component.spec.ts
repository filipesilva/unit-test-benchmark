import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5244Component } from './my-comp-5244.component';

describe('MyComp5244Component', () => {
  let component: MyComp5244Component;
  let fixture: ComponentFixture<MyComp5244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
