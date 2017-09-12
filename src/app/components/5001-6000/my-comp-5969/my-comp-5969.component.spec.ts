import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5969Component } from './my-comp-5969.component';

describe('MyComp5969Component', () => {
  let component: MyComp5969Component;
  let fixture: ComponentFixture<MyComp5969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
