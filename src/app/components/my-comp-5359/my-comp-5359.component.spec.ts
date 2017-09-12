import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5359Component } from './my-comp-5359.component';

describe('MyComp5359Component', () => {
  let component: MyComp5359Component;
  let fixture: ComponentFixture<MyComp5359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
