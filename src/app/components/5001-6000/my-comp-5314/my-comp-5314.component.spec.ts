import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5314Component } from './my-comp-5314.component';

describe('MyComp5314Component', () => {
  let component: MyComp5314Component;
  let fixture: ComponentFixture<MyComp5314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
