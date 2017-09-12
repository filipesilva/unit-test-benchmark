import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5847Component } from './my-comp-5847.component';

describe('MyComp5847Component', () => {
  let component: MyComp5847Component;
  let fixture: ComponentFixture<MyComp5847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
