import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5567Component } from './my-comp-5567.component';

describe('MyComp5567Component', () => {
  let component: MyComp5567Component;
  let fixture: ComponentFixture<MyComp5567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
